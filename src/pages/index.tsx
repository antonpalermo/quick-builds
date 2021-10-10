import React from 'react'
import axios from 'axios'
import TaskInput from '../components/TaskInput'
import Task from '../entity/Task'

const Index = () => {
  const [todos, setTodos] = React.useState<Task[]>([])

  return (
    <div>
      <h1>Quick Builds - Todo App</h1>
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
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <input
              id="sample"
              name="sample"
              type="checkbox"
              onChange={(e) => console.log('Changed', e)}
            />
            <h1>{todo.name}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index
