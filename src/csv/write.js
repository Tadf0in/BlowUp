export default function write (data) {
    let csv = ''

    const exos = {
        3 : [
            {muscle: 'épaules', name: 'Shoulder press', rep : '5-10'},
            {muscle: 'ischios jambiers', name: 'RDL - barre libre', rep : '5-10'},
            {muscle: 'dorsaux', name: 'Lat pulldown en unilatéral - poulie', rep : '?'},
            {muscle: 'mollets', name: 'Calves raises - leg press', rep : '8-12'},
            {muscle: '', name: '', rep: ''},
            {muscle: '', name: '', rep: ''},

            {muscle: 'trapèzes', name: 'Chest supported row', rep : '5-10'},
            {muscle: 'pecs', name: 'Converging chest press', rep : '5-10'},
            {muscle: 'fessiers', name: 'Leg press (pieds haut)', rep : '8-12'},
            {muscle: 'épaules', name: 'Lat pulldown en unilatéral - poulie', rep : '10-15'},
            {muscle: '', name: '', rep: ''},
            {muscle: '', name: '', rep: ''},

            {muscle: 'quadriceps', name: 'Hack squat', rep : '5-10'},
            {muscle: 'pecs', name: 'Incline press - smith machine', rep : '8-12'},
            {muscle: 'épaules', name: 'Rear delt row - poulie', rep : '8-12'},
            {muscle: 'ischios jambiers', name: 'Seated leg curl', rep : '10-15'},
            {muscle: '', name: '', rep: ''},
            {muscle: '', name: '', rep: ''},
        ]
    }

    for (let i=0 ; i < data.nb_seance_par_sem ; i++) {
        csv += `;;;Séance ${i+1};;;\n`
        csv += 'Exercice;Vidéo;Séries;Fourchette de répétitions;Répétitions;Charge;RIR;Note/feedback\n'
        for (let j=0 ; j < data.nb_exo ; j++) {
            let exo = exos[data.nb_seance_par_sem][i*(exos[data.nb_seance_par_sem].length/data.nb_seance_par_sem)+j]
            csv += exo.name + ';'          // Exercice
            csv += ';'                     // Vidéo
            csv += data.nb_series + ';'    // Séries
            csv += exo.rep + ';'           // Fourchette de répétitions
            csv += ';;\n'
        }
        csv += ';;;;;;\n'
    }

    return csv
}