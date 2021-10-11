import React from 'react'
import { XIcon } from '@heroicons/react/outline'

type CardProps = {
  title: string
  isCompleted: boolean
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, index?: number) => void
  remove: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index?: number
  ) => void
}

const Card = (props: CardProps) => {
  const [isDone, setIsDone] = React.useState(props.isCompleted)

  return (
    <div className={'w-full rounded-md bg-white shadow'}>
      <div className={'p-5'}>
        <div className={'w-full inline-flex items-center'}>
          <input
            type={'checkbox'}
            className={'rounded'}
            checked={props.isCompleted || false}
            onChange={props.handleChange}
          />
          <div
            className={'w-full ml-4 inline-flex items-start justify-between'}
          >
            <h1
              className={
                'font-semibold mr-3' +
                `${isDone ? 'line-through' : 'no-underline'}`
              }
            >
              {props.title}
            </h1>
            <button
              className={'rounded-full p-1 hover:bg-red-300'}
              onClick={props.remove}
            >
              <XIcon className={'w-5 h-5 text-gray-500 hover:text-red-500'} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
