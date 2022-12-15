import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import RouterLink from '../RoutesLink'


function Search_P() {
    const navigate = useNavigate()

    const [search, setSearch] = useSearchParams()
    // const [param, setParam] = useSearchParams()
    // console.warn('age', setParam.get('age'))
    // console.warn('city', setParam.get('city'))

    const showactive = search.get('value') === 'active'
    return (
        <div>
            <h1>Params Here</h1>
            <button onClick={() => setSearch({ value: 'active' })}>Active Users</button>
            <button onClick={() => setSearch({})}>Reset Filter</button>


            {
                showactive ? (
                    <h1>Active users</h1>)
                    :
                    (
                        <h1>ALl users</h1>
                    )

            }
            <button onClick={() => navigate(RouterLink.newparam)}>Move</button>
        </div>
    )
}

export default Search_P
