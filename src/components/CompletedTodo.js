import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

export default function CompletedTodo() {
    const todos = useSelector((state) => state.todos);
  return (
            <>
                 <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li
                    className="flex space-x-1 cursor-pointer"
                >
                    <span>Completed Task</span>
                </li>
                
            </ul>

            {
                todos
                .filter((todo) => todo.completed)
                .map((todo) => (
                    <Todo todo={todo} key={todo.id} />
                ))
            }



            </>
  )
}
