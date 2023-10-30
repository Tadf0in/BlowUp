import { useState } from 'react'
import Form from './components/Form'
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [csv, setCSV] = useState()

  const clamp = (min, value, max) => {
    if (value < min) {return min}
    else if (value > max) {return max}
    else {return value}
  }

  const generateCSV = (formData) => {
    console.log(formData)
    
    let nb_series
    let nb_seance_par_sem
    let duree_seance
    if (formData.exp < 2) {
      nb_series = 3
      nb_seance_par_sem = clamp(3, formData.nbfois, 3)
      duree_seance = clamp(30, formData.tpsmax, 60)
    }
    else if (formData.exp <= 4) {
      nb_series = 2
      nb_seance_par_sem = clamp(3, formData.nbfois, 4)
      duree_seance = clamp(30, formData.tpsmax, 60) 
    } 
    else {
      nb_series = 2
      nb_seance_par_sem = clamp(3, formData.nbfois, 5)
      duree_seance = clamp(30, formData.tpsmax, 60)
    }

    let nb_exo
    switch (formData.tpsmax) {
      case 30: {
        nb_exo = 3
        break
      }
      case 45: {
        nb_exo = 4
        break
      }
      case 60: {
        nb_exo = 5
        break
      }
      case 90: {
        nb_exo = 6
        break
      }
    }

    console.log(nb_series, nb_seance_par_sem, duree_seance, nb_exo)
  }

//   const data = [  
//     ['Alan Walker', 'Singer'],  
//     ['Cristiano Ronaldo', 'Footballer'],  
//     ['Saina Nehwal', 'Badminton Player'],  
//     ['Arijit Singh', 'Singer'],  
//     ['Terence Lewis', 'Dancer']  
//  ]

//   const download = () => {
//     console.log("download")

//     setCSV('Name,Profession\n')

//     for (const row of data) {  
//       setCSV(c => c + row.join(';'))
//       setCSV(c => c + "\n") 
//     }
    
//     let hiddenCSV = document.createElement('a');  
//     hiddenCSV.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);  
//     hiddenCSV.target = '_blank';  
//     hiddenCSV.download = 'Programme.csv';  
//     hiddenCSV.click();  
//   }

  return <>
    {/* {csv}
    <button onClick={download}>Télécharger</button> */}
    <Form generateCSV={generateCSV}/>
  </>
}

export default App
