import useForm from "../../hooks/useForm"
import { useSelector, useDispatch } from "react-redux"
import { setForm } from "../../redux/form/formActions"
import { motion } from "framer-motion"
import ModalInfo from "../../components/Modal"
import { useState, useEffect } from "react"

const Formulario = () => {
    const [values, resetForm, handleChange] = useForm({ username: '', email: '', password: '', })
    const [showModalInfo, setShowModalInfo] = useState(false)
    const [showModalCloseLogin, setShowModalCloseLogin] = useState(false)
    const form = useSelector(state => state.form)
    const [passwordRedux, setPasswordRedux] = useState('')
    const [showPassword, setShowPassword] = useState('password')
    const [showName, setShowName] = useState('ver')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (values.password === passwordRedux) {
            dispatch(setForm(values))
            resetForm()
        } else {
            setShowModalInfo(true)
        }

    }
    const handleModalCloset = () => {
        setShowModalInfo(false)
        setShowModalCloseLogin(false)
    }

    const AsignarPassword = async () => {
        setPasswordRedux(form.formData.password)
    }
    const handleShowPassword = () => {
        if(showPassword === 'password') {
            setShowPassword('text')
            setShowName('ocultar')
        } else {
            setShowPassword('password')
            setShowName('ver')
        }
        
    }
    const handleOpenModal = () => {
        setShowModalCloseLogin(true)
    }

    const handleChangeSession = () => {
        dispatch(setForm({ username: '', email: '', }))
        setShowModalCloseLogin(false)
    }

    useEffect(() => {
        AsignarPassword()
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <ModalInfo
                    visible={showModalInfo}
                    color='#e65146'
                    colorText='#ffff'
                    message="Contraseña Incorrecta"
                    onClose={handleModalCloset}
                />
                <form>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type={showPassword} id="password" name="password" value={values.password} onChange={handleChange} />
                        <button type="button" onClick={handleShowPassword}>{showName}</button>
                    </div>
                    <div className="button-container">
                        <button type="submit" onClick={handleSubmit}>Enviar</button>
                        <a style={{ color: 'blue', padding: '10px', fontSize: '16px', textDecoration: 'underline' }} onClick={handleOpenModal}>Logout</a>
                    </div>
                </form>
                <ModalInfo
                    visible={showModalCloseLogin}
                    message="Estas seguro de que quieres cerrar session?"
                    session="true"
                    onChange={handleChangeSession}
                    onClose={handleModalCloset}
                    color= '#efd6bd'
                    colorText= '#cc8259'
                />
            </div>
        </motion.div>
    )
}

export default Formulario