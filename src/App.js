import { useState, useEffect } from 'react'
import initialForms from './initialForms'
import './App.css';

import FillTheForm from './FillTheForm'
import EditForms from './EditForms'

const App = () => {

  const [forms, setForms] = useState([])

  useEffect(() => {
    setForms(initialForms)
  }, [])

  return (
    <div>
      <FillTheForm setForms={setForms} />
      <div>
        <EditForms forms={forms} setForms={setForms} />
      </div>
    </div>
  )

}

export default App;
