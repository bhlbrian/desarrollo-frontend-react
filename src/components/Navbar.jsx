import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

const NavBar = () => {
    const form = useSelector(state => state.form)
    const [ showName, setShowName] = useState(false)
    

    useEffect(() => {
        if (form.formData.username && form.formData.email) {
            setShowName(true)
        } else {
            setShowName(false)
        }
    }, [form.formData])
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/default">Default</Link>
                </li>
                <li>
                    <Link to="/product">Product</Link>
                </li>
                <li>
                    <Link to="/formulario">Formulario</Link>
                </li>
                { showName &&
                    <li className="nav-item-right">
                        <Link to="#">Bienvenido {form.formData.username}: {form.formData.email}</Link>
                    </li>
                }
            </ul>
        </nav>
    )
}


export default NavBar