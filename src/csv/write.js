export default function write (data) {
    let csv = ''

    for (let i=1 ; i <= data.nb_seance_par_sem ; i++) {
        csv += `;;;Séance ${i};;;\n`
        csv += 'Exercice;Vidéo;Séries;Fourchette de répétitions;Répétitions;Charge;RIR;Note/feedback\n'
        for (let j=1 ; j <= data.nb_exo ; j++) {
            csv += `Exo ${j};;${data.nb_series};;;;\n`
        }
        csv += ';;;;;;\n'
    }

    return csv
}