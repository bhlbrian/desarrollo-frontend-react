const OpenLink = ({ titulo, url}) => {
    return (
        <>
            <a
                className="App-link"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
            >
                {titulo}
            </a>
        </>
    )
}

export default OpenLink