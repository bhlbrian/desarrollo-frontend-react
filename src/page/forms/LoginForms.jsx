import useForm from "../../hooks/useForm"
import { useSelector, useDispatch } from "react-redux"
import { setForm } from "../../redux/form/formActions"
import { motion } from "framer-motion"
import ModalInfo from "../../components/Modal"
import { useState } from "react"

const Formulario = () => {
    const [values, handleChange] = useForm({ username: '', password: '',})
    const [showModalInfo, setShowModalInfo] = useState(false)
    const form = useSelector(state => state.form)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setForm(values))
    }
    const handleModalCloset = () => {
        setShowModalInfo(false)
    }
    const handleModalOpen = () => {
        setShowModalInfo(true)
    }

    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
      <div className="container">
        <ModalInfo
        visible={showModalInfo}
        message="bienvenidos"
        onClose={handleModalCloset}
        />
      <form>
          <h5>{form.formData.username}</h5>
          <div>
              <label htmlFor="username">Username:</label>
              <input type="text"
               id="username" 
               name="username" 
               value={values.username} 
               onChange={handleChange} />
          </div>
          <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" value={values.password} onChange={handleChange} />
          </div>
          <div className="button-container">
          <button  type="submit" onClick={handleSubmit}>Enviar</button>
          <button  type="button" onClick={handleModalOpen}>Abrir Modal</button>
          </div>
      </form>
      </div>
        </motion.div>
    )
}

export default Formulario