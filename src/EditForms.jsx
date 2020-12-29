import PersonForm from './PersonForm'

const EditForms = (props) => {
  const { forms, setForms } = props

  const _onSubmit = (index) => (values, { resetForm }) => {
    setForms((prevState) => {
      const newState = [...prevState]
      newState[index] = values
      return newState
    })
    alert("edited")
  }

  return (
    <>
      <h1>Edit the forms</h1>
      {
        forms.map((form, index) => (
          <div className="field">
            <h3>{form.firstName}'s form</h3>
            <PersonForm valuesToEdit={form} buttonText="Edit" onSubmit={_onSubmit(index)} />
          </div>
        ))
      }
    </>
  )
}

export default EditForms 
