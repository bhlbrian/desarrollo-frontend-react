import Logo from './.components/Logo'
import Description from './.components/Description'
import Lesson from '../../components/LessonInfo';
import Contador from './.components/Contador';
import OpenLink from '../../components/OpenLink';

const Default = () => {

    return (
        <>
            <header className="App-header">
                <Logo />
                <Description />
                <OpenLink
                    titulo="este es el primero"
                    url="https://www.google.com"
                />
                <OpenLink
                    titulo="este es el segundo"
                    url="https://www.google.com"
                />
                <Lesson
                    text="Introducción a react y estructura de proyecto"
                    numLesson="1"
                />
                <Lesson
                    text="Context API para la gestión del estado global en aplicaciones react"
                    numLesson="2"
                />
                <Contador />
            </header>
        </>
    )
}

export default Default;