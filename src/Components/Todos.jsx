import { TodoItem } from './TodoItem';


export const Todos=(props)=>{
    let todosStyle={
        minHeight:"70vh",
        margin:"40px auto"
    }
    return (
        <div className="container my-3" style={todosStyle}>
            <h3 className="my-3">Todos List</h3>
            {
                props.todos.length === 0? (
                    <>
                     <h2 className='text-center'>No Todos! Create New</h2>
                    </>
                ):
                props.todos.map((todo)=>{
                    return (<TodoItem todo={todo} key={todo.sno} requestChange={props.requestChange} onDelete={props.onDelete}/>)
                })
            }
        </div>
    )
}