import React, { useState } from 'react'
import { VscNotebook } from 'react-icons/vsc'
import { FcCheckmark, FcInspection, FcPlus, } from 'react-icons/fc'
import { AiOutlineClose } from 'react-icons/ai'
import { Button } from '../Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import { todoPush, deleteTask, TodoActive, } from '../../Redux/Reducers/reducer.todo'
import './todo.scss'
export const Todo = () => {
    const [description, setdescription] = useState('')
    const [yourTasks, setyourTasks] = useState('')
    const dispatch = useDispatch()

    const todoList = () => {
        return <div className="Todolist"><h1>TodoList</h1></div>
    }
    const Todo_div = () => {
        return <div className="todoDiv"><VscNotebook className='VscNotebook' /></div>
    }
    let { todoArray, } = useSelector(store => store.Todos)

    return (

        <div className="todoItems">
            <div className="INT">
                {todoArray.length < 1 ? Todo_div() : false}
                {todoArray.length > 0 ? todoList() : false}
                <input type="text" placeholder='description'
                    className='description' value={description}
                    onChange={evt => setdescription(evt.target.value)} />
                <input type="text" placeholder='yourTasks'
                    className='yourTasks' value={yourTasks}
                    onChange={evt => setyourTasks(evt.target.value)} />
            </div>

            <div className="button">
                <Button name={<FcPlus className='FcPlus' />} className='btnPush'
                    onClick={() => dispatch(todoPush({
                        yourTasks,
                        description,
                        id: todoArray.length,
                        is_active: false
                    }),)} /></div>
                    
            {todoArray.map((el, index) =>
                <div key={el.id} className={el.is_active ? 'todoActive' : 'todosOn'}>
                    {el.is_active ? <div className="completed">
                        <FcInspection className='FcInspection' /></div> : false}
                    <div className="btn">
                        <Button name={<AiOutlineClose />} className={'btnX'}
                            onClick={() => dispatch(deleteTask(el.id),)} />

                        <Button name={<FcCheckmark />} className={'btnV'}
                            onClick={() => dispatch(TodoActive(el.id),)} />
                    </div>
                    {index + 1}
                    <div className="textDescription">
                        description:
                    </div>
                    <div className="elDescription">
                        <strong>{el.description}</strong>
                    </div>
                    <div className="textTasks">
                        tasks:
                    </div>
                    <div className="elYourtasks">
                        <strong>{el.yourTasks}</strong>
                    </div>
                </div>
            )}
        </div>
    )
}
