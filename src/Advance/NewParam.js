import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

function NewParam() {
    const [param, setParam] = useSearchParams()
    // console.warn('age', setParam.get('age'))
    const age = param.get('age')
    console.warn(age)
    return (
        < div >
            <h1>Hello</h1>
            <h3>age is {age}</h3>
        </div >
    )
}

export default NewParam
