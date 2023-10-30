import info from "./info"
import write from "./write"

export default function generateCSV (formData, setCSV) {
    const data = info(formData)
    
    const csv = write(data) 
    setCSV(csv)

    window.scrollTo(0, document.body.scrollHeight)

    let csv_a = document.createElement('a')
    csv_a.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv)
    csv_a.target = '_blank'
    csv_a.download = 'Programme.csv'
    // csv_a.click()

    console.log('click', csv)
  }