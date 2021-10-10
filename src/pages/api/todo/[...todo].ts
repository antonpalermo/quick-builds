import Task from '../../../entity/Task'
import { NextApiRequest, NextApiResponse } from 'next'

const tasks: Task[] = []

function insert(value: Task): Promise<Task> {
  return new Promise((res, rej) => {
    if (value.name === '') {
      return rej('Task name is required')
    }

    const task = tasks.push(value)
    return res(tasks[task - 1])
  })
}

export default async (req: NextApiRequest, res: NextApiResponse) =>
  new Promise(async (resolve) => {
    const { todo, action = todo[0] } = req.query

    switch (req.method) {
      case 'POST':
        switch (action) {
          case 'create':
            const result = await insert({
              name: req.body.name,
              isCompleted: false,
            })
            res.status(200).send(result)
            res.end()
            break
        }
        break
      case 'GET':
        break
    }
  })
