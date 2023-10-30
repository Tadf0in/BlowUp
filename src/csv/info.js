const clamp = (min, value, max) => {
    if (value < min) {return min}
    else if (value > max) {return max}
    else {return value}
}

export default function info (formData) {
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
    switch (formData.tpsmax*1) {
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

    return {nb_series, nb_seance_par_sem, duree_seance, nb_exo}
}