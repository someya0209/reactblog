import React from 'react'
import { Field, reduxForm } from 'redux-form'

import Button from '@material-ui/core/Button';

let Form = props => {
  const { handleSubmit } = props
  return (
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <div>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="タイトルを入力"
          />
        </div>
        <label>Body</label>
        <div>
          <Field
            name="body"
            component="input"
            type="text"
            placeholder="内容を入力"
          />
        </div>
        <div>
        <Button
            color="primary"
            type="submit"
        >
        投稿
        </Button>
        </div>
      </form>
  );
}

Form = reduxForm({
  // a unique name for the form
  form: 'contactForm'
})(Form)

export default Form
