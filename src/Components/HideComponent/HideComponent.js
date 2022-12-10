import React, { useRef } from 'react'
import './HideComponent.css'
//


function HideComponent({ todos, active, setActive }) {

    const checkRef = useRef();

    function checkHandle(e) {

        console.log(checkRef.current.checked)
        if (checkRef.current.checked) {
            setActive(true)

        }
        else {
            setActive(false)
        }
    }
    return (
        <div className='hidecomp'>
            <input id="hideinput" type="checkbox" ref={checkRef} onChange={checkHandle} />
            <label for="hideinput"> <b>Hide completed</b> </label>



        </div>


    )
}

export default HideComponent