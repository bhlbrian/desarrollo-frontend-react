import { useSelector } from "react-redux"

const Description = () => {
  const defaultState = useSelector(state => state.default)
    return (
        <>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>{defaultState.name}</h3>
        </>
    )
}

export default Description