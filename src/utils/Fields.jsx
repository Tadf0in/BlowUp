export default function Input ({text, placeholder, name, get, set}) {
    return <>
        <input type={type} placeholder={placeholder}/>
    </>
}

export function Select ({name, options, get, set, children}) {
    return <span className="question">
        
        { children && <label htmlFor="name">{children}</label>}
        
        <select className="form-select" id={name} required={false}
            value={get} 
            onChange={(e) => set(name, e.target.value)}
        >
        
            { Object.keys(options).map((o, i) => 
                <option disabled={o === ''} value={o} key={i}>
                    {options[o]}
                </option>
            )}
        </select>
    </span>
}