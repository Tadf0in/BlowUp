import { Select } from "../utils/Fields"

export default function SelectMuscles ({muscles}) {

    return <>
        { muscles.map((m, i) => 
            <Select name="muscles" key={i} options={{
                '': m,
                'peu': 'Peu',
                'moyen': 'Moyen',
                'eleve': 'Elevé',
            }}/>
        )}
    </>
}