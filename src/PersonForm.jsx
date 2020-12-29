import { Formik, Field, Form } from 'formik';

const PersonForm = (props) => {
  const { onSubmit, valuesToEdit, buttonText } = props

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
  }

  return (
    <div>
      <Formik
        initialValues={valuesToEdit || initialValues}
        onSubmit={onSubmit}
      >
        <Form className="fields">
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" />

          <label htmlFor="eail">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
          />
          <button type="submit">{buttonText || "Submit"}</button>
        </Form>
      </Formik>
    </div>
  )

}

export default PersonForm;
