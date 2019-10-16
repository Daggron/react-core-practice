import React from 'react'


function Child(props) {
    return(
        <button onClick={()=>props.msg('Awww dil da ni mada')}>
            Hit me
        </button>
    )

}

export  default Child;