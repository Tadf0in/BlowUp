import { useEffect, useState } from "react"
import { Select } from "../utils/Fields"

export default function SelectMuscles ({muscles, formData, setFormData}) {
    const [priorite, setPriorite] = useState()

    useEffect(() => {
        let mp = {}
        for (const muscle of muscles) {
            mp[muscle] = ''
        } 
        setPriorite(mp)
    }, [])

    useEffect(() => {
        setFormData({...formData, muscles: priorite})
    }, [priorite])

    const change = (name, value) => {
        setPriorite({...priorite, [name]: value})
    }

    return <div className="muscles">
        <label>
            Quel est le niveau de priorité que tu veux donner ...
            <br/>
            <span style={{fontStyle: 'italic', color: '#555', fontSize: '0.8em'}}>(Veuillez sélectionner autant de muscles en priorité faible que de muscles en priorité élevée)</span>
        </label>
        { priorite && muscles.map((m, i) => 
            <Select name={m} key={i} get={priorite[m]} set={change} options={{
                '': 'aux ' + m + ' ?',
                'peu': '🟢 Peu',
                'moyen': '🟡 Moyen',
                'eleve': '🔴 Élevé',
            }}/>
        )}

        { formData.muscles && <div className="nbprio">
            <span>🟢 Peu : {Object.values(formData.muscles).filter(o => o === 'peu').length}</span>
            <span>🟡 Moyen : {Object.values(formData.muscles).filter(o => o === 'moyen').length}</span>
            <span>🔴 Élevé : {Object.values(formData.muscles).filter(o => o === 'eleve').length}</span>
        </div>}
    </div>
}