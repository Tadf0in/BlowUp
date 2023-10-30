import { Select } from "../utils/Fields";
import SelectMuscles from "./SelectMuscles";

export default function Form () {

    return <form>

        <Select name="experience" options={{
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

        <SelectMuscles muscles={[    
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

    </form>
}