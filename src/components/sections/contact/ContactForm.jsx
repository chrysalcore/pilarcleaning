import { useState, useMemo } from "react"
import { inputs as data } from "../../../data/contact"

function ContactForm() {
    const [fields, setFields] = useState({
        name: '',
        subject: 'Residencial Cleaning',
        description: ''
    })

    const fixedData = useMemo(() => data.map(input => ({
            ...input,
            state: fields[input.name.toLowerCase()],
            setState: (e) => setFields({...fields, [input.name.toLowerCase()]: e.target.value})
        })
    ), [fields])

    const onSubmit = (e) => {
        e.preventDefault();

        const { name, subject, description } = fields
        const body = 'Name: ' + name + '\n\nMessage:\n' + description;
        const headCod = encodeURIComponent(subject);
        const bodyCod = encodeURIComponent(body);

        window.open(`mailto:contact@pilarcleaning.com?subject=${headCod}&body=${bodyCod}`);
    }

    return (
        <form className="contact-form" action="">
            {fixedData.map(item => <Field {...item} key={item.name.toLowerCase()} />)}
            <button className="contact-form__btn button" onClick={onSubmit} >Submit</button>
        </form>
    )
}

function Field({ name, type, placeholder, value, state, setState }) {
    return (
        <label className="contact-form__field" htmlFor={name.toLowerCase()}>
            <span className="contact-form__label">{name}</span>
            {type === 'option'?
                <select className="contact-form__input" name={name.toLowerCase()} id={name.toLowerCase()} value={state} onChange={setState} >
                    {value.map(val => <option className="contact-form__option" value={val.toLowerCase()} >{val}</option>)}
                </select>
                :
                type === 'textarea'?
                    <textarea className="contact-form__input" name={name.toLowerCase()} id={name.toLowerCase()} placeholder={placeholder} rows={6} value={state} onChange={setState} ></textarea>
                    :
                    <input className="contact-form__input" type={type} name={name.toLowerCase()} id={name.toLowerCase()} placeholder={placeholder} value={state} onChange={setState} />
            }
        </label>
    )
}

export default ContactForm