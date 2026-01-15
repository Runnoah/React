import { useState } from "react"
import PropTypes from "prop-types"

function ParentComponent() {
    const [name, setName] = useState("Juanaco")
    return <ChildComponent name={name} setName={setName} />
}

export default ParentComponent

function ChildComponent(props) {
    return (
        <>
        <h1>Hello {props.name}</h1>
        <button onClick={() => props.setName("Juanky")}>Change
        Name</button>
        <br/>
        <button onClick={() => props.setName("Miguel")}>Alternative Name</button>
        </>
    )
}
ChildComponent.propTypes = {
    name: PropTypes.string.isRequired,
    setName: PropTypes.func.isRequired
}