import './App.css';
import PersonForm from './PersonForm'

const FillTheForm = (props) => {
  const { setForms } = props

  const _onSubmit = (values, { resetForm }) => {
    setForms((prevState) => (prevState.concat(values)))
    alert('sumitted')
    resetForm()
  }


  return (
    <>
      <h1>Fill the form</h1>
      <PersonForm setForms={setForms} onSubmit={_onSubmit} />
    </>
  )

}

export default FillTheForm;
