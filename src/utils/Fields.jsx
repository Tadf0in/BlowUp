export default function Input ({text, placeholder, name, get, set}) {
    return <>
        <input type={type} placeholder={placeholder}/>
    </>
}

export function Select ({name, options, get, set, children}) {
    return <span className="question">
        <label htmlFor="name">{children}</label>
        <select className="form-select" id={name}>
            { Object.keys(options).map((o, i) => 
                <option value={o} key={i}>{options[o]}</option>)
            }
        </select>
    </span>
}