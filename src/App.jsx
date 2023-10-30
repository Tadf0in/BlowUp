import { useState } from 'react'
import Form from './components/Form'
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import generateCSV from './csv/main.js'

function App() {
  const [csv, setCSV] = useState()

  const download = (formData) => {
    generateCSV(formData, setCSV)
  }

  return <>
    <Form download={download}/>
    { csv && <p> 
      Si le téléchargement n'a pas débuté, cliquez&nbsp;
       <a href={'data:text/csv;charset=utf-8,' + encodeURI(csv)}
        id="csv"
        target='_blank' 
        download='Programme.csv'
        >
        ici
      </a>
      .
    </p>}
  </>
}

export default App
