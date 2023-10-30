import { useState } from "react";
import { Select } from "../utils/Fields";
import SelectMuscles from "./SelectMuscles";

export default function Form ({download}) {
    const [errors, setErrors] = useState()
    const [formData, setFormData] = useState({
        exp: '1',
        nbfois: '3',
        tpsmax: '30',
        muscles: {},
    })

    const checkForm = () => {
        const nb_peu = Object.values(formData.muscles).filter(o => o === 'peu').length
        const nb_eleve = Object.values(formData.muscles).filter(o => o === 'eleve').length
        if (nb_peu !== nb_eleve) {
            setErrors('Veuillez sélectionner autant de muscles en priorité faible que en priorité élevée')
            return false
        }
        setErrors()
        return true
    }

    const submit = (e) => {
        e.preventDefault()
        if (checkForm()) {
            download(formData)
        }
    }

    const change = (name, value) => {
        setFormData({...formData, [name]: value})
    }

    return <form onSubmit={(e) => submit(e)}>

        <Select name="exp" get={formData["exp"]} set={change} options={{
            "1": "Moins de 2 ans",
            "3": "Entre 2 et 4 ans",
            "5": "Plus de 4 ans",
        }}>
            Depuis quand pratiques-tu sérieusement la musculation ?
        </Select>

        <Select name="nbfois" get={formData["nbfois"]} set={change} options={{
            "3": "3 fois",
            "4": "4 fois",
            "5": "5 fois",
        }}>
            Combien de fois max tu peux t’entrainer par semaine ?
        </Select>

        <Select name="tpsmax" get={formData["tpsmax"]} set={change} options={{
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
        <button type='submit' className="btn btn-secondary">Générer le programme</button>
    </form>
}