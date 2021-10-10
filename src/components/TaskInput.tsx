import React from 'react'
import { Field, Form, Formik, FormikBag, FormikHelpers } from 'formik'

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
            <div>
              <Field name={'name'} placeholder={'Give your task a name...'} />
              <button type={'submit'}>Create</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default TaskInput
