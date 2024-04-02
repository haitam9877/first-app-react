import { useState } from "react"

export default function Myinupt() {

    const [input , setInupt] = useState("")
    return (
        <div>
            <input value={input} onChange={hendllInupt} />
        </div>
    )

    function hendllInupt(e) {

        setInupt(e.target.value)
        console.log(e.target.value)
    }
}

