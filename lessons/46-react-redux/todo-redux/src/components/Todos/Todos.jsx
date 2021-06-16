import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, toggleTodo, changeFilter } from '../../redux/actions'
import './Todos.css'


const Todos = () => {
    const [todoText, setTodoText] = useState('');

    const todos = useSelector((state) => state.todoReducer.todos) || [];
    const filter = useSelector((state) => state.filterReducer.filter) || '';
    
    const dispatch = useDispatch();

    const handleText = (e) => {
        setTodoText(e.target.value);
    }

    const onAddTodo = () => {
        dispatch(addTodo(todoText));
        setTodoText('')
    }

    const onDeleteTodo = (id) => {
        dispatch(deleteTodo(id))
    }

    const onToggleTodo = (id) => {
        dispatch(toggleTodo(id))
    }

    const filterTodos = (todos, filter) => {
        switch(filter) {
            case 'completed': 
                return todos.filter((item) => item.completed)
            case 'active':
                return todos.filter((item) => !item.completed)
            default:
                return todos
        }
    }

    const filteredTodos = filterTodos(todos, filter);

    return (
        <div className='todos-container'>
            <h2 className='heading'>Todos</h2>
            <div className='filter-container'>Show:
                <button className='button button-all' onClick={() => dispatch(changeFilter('all'))}>All</button>
                <button className='button button-active' onClick={() => dispatch(changeFilter('active'))}>Active</button>
                <button className='button button-completed' onClick={() => dispatch(changeFilter('completed'))}>Completed</button>
            </div>
            <div className='add-todo-container'>
            <input className='add-todo-input' type='text' value={todoText} placeholder='Add new todo' onChange={(e) => handleText(e)}/>
            <button className='button button-add-todo' onClick={onAddTodo} disabled={todoText.trim() ? false : true}>Add todo</button>
            </div>
            <ul className='todos'>
                {filteredTodos.map((item) => {
                    return (
                        <div className='todo-item-container' key={item.id}>
                            <li className={item.completed ? 'todo-item completed' : 'todo-item'}>{item.text}</li>
                            <button className='button button-toggle' onClick={() => onToggleTodo(item.id)}>Done Todo</button>
                            <button className='button button-delete' onClick={() => onDeleteTodo(item.id)}>Delete Todo</button>
                        </div>

                    )
                })}
            </ul>
        </div>
    )
}

export default Todos