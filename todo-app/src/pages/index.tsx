import React from 'react'
import axios from 'axios'
import TaskInput from '../components/TaskInput'
import Task from '../entity/Task'
import Card from '../components/Card'

const Index = () => {
  const [todos, setTodos] = React.useState<Task[]>([])

  // get all available tasks
  const getAllTasks = async () => {
    const tasks = await axios.get('/api/todo/tasks')
    setTodos(tasks.data)
  }

  const handleRemoveTask = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    const response = await axios('/api/todo/remove', {
      method: 'POST',
      data: { index },
    })
    setTodos(response.data)
    console.log(todos)
  }

  const handleUpdateTask = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const currentStatus = e.target.checked
    const response = await axios('/api/todo/update', {
      method: 'POST',
      data: { index, isCompleted: currentStatus },
    })
    setTodos(response.data)
  }

  React.useEffect(() => {
    getAllTasks()
  }, [])

  return (
    <div className={'container mx-auto max-w-xl py-10'}>
      <h1 className={'headline'}>Tasks</h1>
      <TaskInput
        onSubmit={async (val: any, bag: any) => {
          const result = await axios.post('/api/todo/create', {
            name: val.name,
            isCompleted: false,
          })

          const { name, isCompleted } = result.data

          setTodos((old) => [...old, { name, isCompleted }])
        }}
      />

      <div className={'py-10'}>
        {todos.map((todo, index) => (
          <div key={index}>
            <Card
              title={todo.name}
              isCompleted={todo.isCompleted}
              handleChange={(e) => handleUpdateTask(e, index)}
              remove={(e) => handleRemoveTask(e, index)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index
