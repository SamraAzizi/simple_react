import { useEffect, useState } from "react"


export default function GitHubFinder(){
    const [userName, setUserName] = useState('SamraAzizi')
    const [userData, setUserData] = useState(null)
    const [loading , setLoading] = useState(false)

    async function fetchGithubUserData(){
        setLoading(true)
        const res = await fetch(`http://api.github.com/users/${'userName'}`)

        const data = await res.json()
        if(data){
            setUserData(data)
            setLoading(false)
            setUserName('')

        }

    }

    function handleSubmit(){
        fetchGithubUserData()

    }

    useEffect(()=>{
        fetchGithubUserData()
    }, [])

    if(loading){
        return <h1>Loading Data ! please wait.</h1>

    }

    return <div className="github-profile-container">

        <div className="input-wrapper">
            <input
            name="search-by-usename"
            type="text"
            placeholder="Search Github Username..."
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            
            

            />
            <button onClick={handleSubmit}>Search</button>

        </div>
        {
            userData !== null ? <User user={userData}></User> :null
        }
    </div>
    
}