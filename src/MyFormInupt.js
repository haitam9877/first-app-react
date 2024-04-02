import { useState } from "react"

export default function MyFormInupt() {
    const [formInput, setFormInput] = useState({
        
        name: "",
        email: ""
    })
    return (
        <form onSubmit={(e) => {
            e.preventDefault()

            console.log(formInput)
        }}>
            <label>Name</label>
            <input value={formInput.name} onChange={(e) => {
                setFormInput({ ...formInput , name : e.target.value })
            }} />
            <hr />
            <label>Email</label>
            <input value={formInput.email} onChange={(e) => {
                setFormInput({...formInput , email : e.target.value})
            }} />
            <hr />

            <button>Send</button>
        </form>
    )
}