import { useState } from "react";

export const TodoEditor = (props) => {
    const [title, setTitle] = useState(props.title)
    const [desc, setDesc] = useState(props.desc)
    const previousTitle = props.currentTodo.title
    const previousDesc = props.currentTodo.desc
    const submit = (e) => {
        e.preventDefault()
        
        if (previousTitle === title && previousDesc === desc) {console.log("testing")} else {
            props.currentTodo.title = title
            props.currentTodo.desc = desc
            props.currentTodo.lastChangeDate = new Date().toLocaleString()
            props.currentTodo.changesCount = props.currentTodo.changesCount + 1
        }
        props.changer()
    }

    return (<div className="container my-3">
        <h3>Change Todo</h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Todo Title</label>
                <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} id="title" />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" value={desc} onChange={(e) => setDesc(e.target.value)} id="description" />

            </div>
            <button type="submit" className="btn btn-success btn-sm">Save Change</button>

        </form>
    </div>);
};
