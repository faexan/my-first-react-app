const todos = [
    { task: "Do the Proofs of Topology", id: crypto.randomUUID() },
    { task: "Work on Odin Projects", id: crypto.randomUUID() },
    { task: "Prepare for MidTerm", id: crypto.randomUUID() },
];


function TodoList() {
    return (
        <ul>
            {todos.map((todo) => {
                return (
                    <li key={todo.id}>{todo.task}</li>
                ) 
            })}
        </ul>
    )
}



const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function MonthList() {
    return (
        <ul>
            {months.map((month, index)=> {
                return (
                    <li key={index}>{month}</li>
                )
            })}
        </ul>
    )
}



export default TodoList