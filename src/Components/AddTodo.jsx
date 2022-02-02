import { useState } from "react";



export const AddTodo = (props) => {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [isEmptyError, setIsEmptyError] = useState(false)
    const submit = (e) => {
        e.preventDefault()
        if (!title || !desc) {
            setIsEmptyError(true)
        } else {
            props.addTodo(title, desc)
            setIsEmptyError(false)
            setTitle("")
            setDesc("")
        }

    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" value={desc} onChange={(e) => setDesc(e.target.value)} id="description" />
                </div>
                {
                    isEmptyError && (!title || !desc) ?
                        <div className="alert alert-danger" role="alert">
                            Tilte or Description Can't be empty!
                        </div>
                        : ""
                }
                <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
            </form>
        </div>
    );
};
