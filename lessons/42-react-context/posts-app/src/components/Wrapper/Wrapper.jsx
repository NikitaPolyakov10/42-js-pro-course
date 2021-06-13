import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import './Wrapper.css'

const Wrapper = ({children}) => {
    const {theme} = useContext(ThemeContext);
    const currentTheme = theme === 'light' ? 'light' : 'dark'


    return (
        <div className={'wrapper ' + currentTheme}>
            {children}
        </div>
    )
}

export default Wrapper;