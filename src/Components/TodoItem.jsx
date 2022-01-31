import EditPenIcon from "../icons8-edit.svg";
export const TodoItem = ({ todo, onDelete, requestChange }) => {
    return (
        <>
            <div className="card text-center my-2">
                <div className="card-header">
                    Todo:{todo.sno}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{todo.title}</h5>
                    <p className="card-text">{todo.desc}</p>
                    <button className="btn btn-sm btn-danger mx-5" onClick={() => onDelete(todo)}>Delete</button>
                    <button className="btn btn-sm btn-info mx-5" onClick={(e) => requestChange(todo)}>
                        <img src={EditPenIcon} alt="Failed loading"></img>
                    </button>

                </div>
                <div className="card-footer text-muted">
                    Creation Time:{todo.creationDate}<br/>
                    {todo.changesCount>0?<>Last Change:{todo.lastChangeDate}<br/>Times:{todo.changesCount}</>:""}
                </div>
            </div>
        </>
    )
}