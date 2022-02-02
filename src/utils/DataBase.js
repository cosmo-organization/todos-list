import { useState } from "react"

export class TodoStorage {

    constructor(DB_NAME, STORE_NAME) {
        this.db = null
        this.DB_NAME = DB_NAME
        this.STORE_NAME = STORE_NAME
        this.request = indexedDB.open(DB_NAME, 1)
        this.request.onerror = (e) => {
            alert(e)
        }
        this.request.onsuccess = this.runOnSuccess
        this.request.onupgradeneeded = (e) => {
            var db = e.target.result;
            var objectStore = db.createObjectStore(this.STORE_NAME, {keyPath: this.STORE_NAME+"@12id"});
        }
    }

    runOnSuccess(e){
        this.db=this.request.result
    }

    readDB(){

    }

}