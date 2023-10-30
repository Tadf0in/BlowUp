export default function write (data) {

    console.log(data, data.nb_seance_par_sem)

    let csv = 'Exercice;Vidéo;Fourchette de répétitions;Répétitions;Charge;RIR;Note/feedback\n'

    for (let i ; i < data.nb_seance_par_sem ; i++) {
        console.log(i)
    }

    // for (const row of data) {  
    //   csv += row.join(';')
    //   csv += "\n" 
    // }
    return csv
}