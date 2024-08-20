import React from 'react'
import logo from '../../../logo.svg'
import { useSelector } from "react-redux"

const Logo = () => {
    const defaultState = useSelector(state => state.default)
    return (
        <>
            <h3>{defaultState.name}</h3>
            <img src={logo} className="App-logo" alt="logo" />
        </>
    )
}

export default Logo