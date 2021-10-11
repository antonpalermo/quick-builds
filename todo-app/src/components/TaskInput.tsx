import React from 'react'
import { PlusIcon } from '@heroicons/react/outline'
import { Field, Form, Formik, FormikHelpers } from 'formik'

type TaskFields = {
  name: string
}

type TaskInputProps = {
  onSubmit: (
    val: TaskFields,
    helpers: FormikHelpers<TaskFields>
  ) => void | Promise<any>
}

const TaskInput = ({ onSubmit }: TaskInputProps) => {
  return (
    <div>
      <Formik initialValues={{ name: '' }} onSubmit={onSubmit}>
        {({ values }) => (
          <Form>
            <div className={'w-full inline-flex space-x-3'}>
              <Field
                type={'text'}
                name={'name'}
                autoComplete={'off'}
                className={'w-full rounded-md'}
                placeholder={'Give your task a name...'}
              />
              <button
                type={'submit'}
                className={'bg-blue-500 shadow p-2 rounded-md border-blue-500'}
              >
                <PlusIcon className={'w-6 h-6 text-white'} />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default TaskInput
