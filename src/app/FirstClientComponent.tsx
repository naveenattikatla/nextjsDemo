"use client"

import { useState } from "react"

export default function FirstClientComponent(){
    const [values , setValues] = useState(0)
    return (
        <>
        <h4>welcome to next js ... I am client component </h4>
        <button onClick={e => setValues( values +  1 )}>client button</button>
        <h3>{values}</h3>
        </>
    )
}