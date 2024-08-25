

const Landing = () => {
    return (
        <>
            <div className="title-box">
                <h1>MODULO 7: DESARROLLO FRONTEND CON REACT JS</h1>
            </div>
            <main>
                <section>
                    <h2 className="subtitle">Bienvenido</h2>
                    <p>Este es modulo se centra en el usu de React, incluyendo la creacion de componentes,
                         el manejo de hooks y el uso de Redux</p>
                </section>
                <section>
                    <h2 className="subtitle">Temas Cubiertos</h2>
                </section>
                <section className="columns">
                    <div className="column">
                        <p>Componentes funcionales y de clase</p>
                    </div>
                    <div className="column">
                        <p>Uso de React hooks como useState y useEffect</p>
                    </div>
                    <div className="column">
                        <p>Creación de custom hooks como useForm</p>
                    </div>
                    <div className="column">
                        <p>Gestión de variables de estado con useState</p>
                    </div>
                    <div className="column">
                        <p>Gestión de estado global con Redux</p>
                    </div>
                    <div className="column">
                        <p>Integración con Redux y React</p>
                    </div>
                    <div className="column">
                        <p>Manejo de formularios en React</p>
                    </div>
                    <div className="column">
                        <p>Publicando nuestra Pagina con GitHub Pages</p>
                    </div>
                </section>

                <section>
                    <h2 className="subtitle">Recursos adicionales</h2>
                    <p>Profundizar en los temas cubiertos, consulta los siguientes recursos:</p>
                </section>
            </main>

            <footer>
                <p>2024 Modulo 7. USIP</p>
            </footer>
        </>
    )
}

export default Landing