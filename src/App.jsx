import { useState } from 'react'
import './main.css'

function App() {
  const [csv, setCSV] = useState()

  const data = [  
    ['Alan Walker', 'Singer'],  
    ['Cristiano Ronaldo', 'Footballer'],  
    ['Saina Nehwal', 'Badminton Player'],  
    ['Arijit Singh', 'Singer'],  
    ['Terence Lewis', 'Dancer']  
 ]

  const download = () => {
    console.log("download")

    setCSV('Name,Profession\n')

    for (const row of data) {  
      setCSV(c => c + row.join(';'))
      setCSV(c => c + "\n") 
    }
    
    let hiddenCSV = document.createElement('a');  
    hiddenCSV.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);  
    hiddenCSV.target = '_blank';  
    hiddenCSV.download = 'Programme.csv';  
    hiddenCSV.click();  
  }

  return <>
    {csv}
    <button onClick={download}>Télécharger</button>
  </>
}

export default App
