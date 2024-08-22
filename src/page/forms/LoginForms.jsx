import useForm from "../../hooks/useForm"
import { useSelector, useDispatch } from "react-redux"
import { setForm } from "../../redux/form/formActions"

const Formulario = () => {
    const [values, handleChange] = useForm({ username: '', password: '',})

    const form = useSelector(state => state.form)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setForm(values))
    }

    return (
        <>
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
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
        </>
    )
}

export default Formulario