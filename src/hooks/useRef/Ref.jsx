import React, { useState, useEffect, useRef } from "react";

export default function Ref(){
    const [name, setName] = useState('')
    const renderCount = useRef(1)

    useEffect (() => {
        renderCount.current = renderCount.current + 1
    })

    return (
        <>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <div>My name is {name}</div>
        <div>I render {renderCount.current} times</div>
        </>
    )
}