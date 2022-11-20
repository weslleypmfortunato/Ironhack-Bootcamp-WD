import { useState } from 'react'
import Summary from './Summary'
import Task from './Task'

const initialTests = [
  {
    _id: '1a',
    name: 'Task 1',
    description: 'Alimentar Maialice',
    isDone: false
  },
  {
    _id: '2a',
    name: 'Task 2',
    description: 'Assistir TV',
    isDone: false
  },
  {
    _id: '3a',
    name: 'Task 3',
    description: 'Pedir um Big Tasty',
    isDone: false
  }
]

const ToDoList = () => {
  const [tasks, setTasks] = useState(initialTests)
  const [tasksCompleted, setTasksCompleted] = useState(0)

  const toggleTaskDone = id => {
    const tasksCopy = [...tasks]

    tasksCopy.forEach(task => {
      if (task._id === id) {
        task.isDone = task.isDone ? false : true

        if (task.isDone) setTasksCompleted(tasksCompleted + 1)
        else if (!task.isDone) setTasksCompleted(tasksCompleted - 1)
      }
    })

    setTasks(tasksCopy)
  }

  return (
    <div>
      <Summary tasksCompleted={tasksCompleted}/>
      <div className='todo-container'>
        {/* aqui é onde passamos a props com uma função para o filho. (1:13:00 da aula do dia 17/Nov)  - PRESTE ATENÇÃO - vai acessar ela pelo nome da prop e não da function*/}
        { tasks.map(task => <Task task={task} toggleTask={toggleTaskDone}/>) }
      </div>
    </div>
  )
}

export default ToDoList