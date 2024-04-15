import useLocalStorage from "./useLocalStorage"
import './theme.css'



export default function LightDarkMode(){

    const [theme, setTheme] = useLocalStorage('theme','dark')

    function handletoggleTheme(){
        setTheme(theme === 'light' ? 'dark' :'light')

    }

    return <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
            <p>Asalamalaikum Everyone</p>
            <button onClick={handletoggleTheme}>Change The Theme!</button>

        </div>

    </div>

} 