import useLocalStorage from "./useLocalStorage"



export default function LightDarkMode(){

    const [theme, setTheme] = useLocalStorage('theme','dark')

    function handletoggleTheme(){
        setTheme(theme === 'light' ? 'dark' :'light')

    }

    return <div className="light-dark-mode">
        <div className="container">
            <p>Asalamalaikum Everyone</p>
            <button onClick={handletoggleTheme}>Change The Theme!</button>

        </div>

    </div>

} 