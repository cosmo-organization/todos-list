
import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
    return (
        <>
            <div className="card text-center">
                <div className="card-header">
                    Todo:{todo.sno}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{todo.title}</h5>
                    <p className="card-text">{todo.desc}</p>
                    <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>Delete</button>
                </div>
                <div className="card-footer text-muted">
                    Creation Time:{todo.creationDate}
                </div>
            </div>
            <hr />
        </>
    )
}