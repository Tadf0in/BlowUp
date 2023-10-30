import { useState } from "react";
import { Select } from "../utils/Fields";
import SelectMuscles from "./SelectMuscles";

export default function Form () {
    const [errors, setErrors] = useState()
    const [formData, setFormData] = useState({
        exp: '',
        nbfois: '',
        tpsmax: '',
        muscles: {},
    })

    const checkForm = () => {
        const nb_peu = Object.values(formData.muscles).filter(o => o === 'peu').length
        const nb_eleve = Object.values(formData.muscles).filter(o => o === 'eleve').length
        if (nb_peu !== nb_eleve) {
            setErrors('Veuillez sélectionner autant de muscles en priorité faible que en priorité élevée')
            return
        }
        setErrors()
        console.log(formData)
    }

    const submit = (e) => {
        e.preventDefault()
        checkForm()
    }

    return <form onSubmit={(e) => submit(e)}>

        <Select name="exp" options={{
            "2": "Moins de 2 ans",
            "2-4": "Entre 2 et 4 ans",
            "4": "Plus de 4 ans",
        }}>
            Depuis quand pratiques-tu sérieusement la musculation ?
        </Select>

        <Select name="nbfois" options={{
            "3": "3 fois",
            "4": "4 fois",
            "5": "5 fois",
        }}>
            Combien de fois max tu peux t’entrainer par semaine ?
        </Select>

        <Select name="tpsmax" options={{
            "30": "30 min",
            "45": "45 min",
            "60": "1 h",
            "90": "1 h 30",
        }}>
            Combien de temps max peux-tu accorder à tes séances ?
        </Select>
        
        <SelectMuscles name="muscles" formData={formData} setFormData={setFormData} muscles={[    
            'épaules',
            'pecs',
            'trapèzes',
            'dorsaux',
            'abdos',
            'biceps',
            'triceps',
            'fessiers',
            'quadriceps',
            'ischios jambiers',
            'mollets',
        ]}/>

        <button onClick={() => console.log(formData)}>log</button>

        { errors && <p className="alert alert-danger">{errors}</p>}
        <button type='submit' className="btn btn-secondary">Télécharger</button>
    </form>
}