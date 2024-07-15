"use client"

export default function ClientButton() {
    return (
        <button onClick={e => {console.log(e.target)}}>servercomponent</button>
    )
}