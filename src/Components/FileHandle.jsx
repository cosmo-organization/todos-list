import { useState } from "react";

export const FileHandle = () => {
    const [textToDisplay,setTextToDisplay]=useState("")
    const onEveryUpload=(e)=>{
        const selectedFile=e.target.files[0]
        if (!selectedFile)return
        const reader=new FileReader()
        reader.onload=(e)=>{
            const textContent=e.target.result
            setTextToDisplay(textContent)
        }
        reader.onerror=(e)=>{
            const error=e.target.error
            setTextToDisplay(error)
        }
        reader.readAsText(selectedFile)
    }
    return <>
        <input type="file" name="fileData" onChange={onEveryUpload} id="" />
        <p id="textContent">{textToDisplay}</p>
    </>;
};
