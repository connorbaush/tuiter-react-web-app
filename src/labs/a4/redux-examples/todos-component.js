import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";

const Todos = () => {
    const todos =
        useSelector(state => state.todos);
    const [todo, setTodo] = useState({ do: 'Create a future of abundance' });
    const dispatch = useDispatch();
    const toggleTodoDone = (todo) => {
        dispatch(todoDoneToggle(todo))
    }

    const createTodoClickHandler = () => {
        dispatch(addTodo(todo))
        setTodo({ do: '' })
    }
    const deleteTodoClickHandler = (index) => {
        dispatch(deleteTodo(index))
    }


    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue
        };
        setTodo(newTodo);
    }

 return(
     <>
         <div class="d-block d-sm-none fa-2x">XS</div>
         <div class="d-none d-sm-block d-md-none fa-2x">S</div>
         <div class="d-none d-md-block d-lg-none fa-2x">M</div>
         <div class="d-none d-lg-block d-xl-none fa-2x">L</div>
         <div class="d-none d-xl-block d-xxl-none fa-2x">XL</div>
         <div class="d-none d-xxl-block fa-2x">XXL</div>
     <h3>Todos</h3>
         <ul className="list-group">
             <li className="list-group-item">
                 <button onClick={createTodoClickHandler}
                     className="btn btn-primary w-25 
                          float-end">
                     Create</button>
                 <input
                     onChange={todoChangeHandler}
                     value={todo.do} className="form-control w-75"                />
             </li>
       {
         todos.map((todo, index) =>
             <li className="list-group-item">
                 <button onClick={() =>
                     deleteTodoClickHandler(index)}
                     className="btn btn-danger 
                      float-end ms-2">
                     Delete
                 </button>
                 <input type="checkbox" className="me-2"
                     checked={todo.done}
                     onChange={() =>
                         toggleTodoDone(todo)} />

             {todo.do}
             </li>
         )

       }
     </ul>
   </>
 );
};
export default Todos;