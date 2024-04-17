import { useEffect, useState } from "react"


export default function GitHubFinder(){
    const [userName, setUserName] = useState('SamraAzizi')

    async function fetchGithubUserData(){
        const res = await fetch(`http://api.github.com/users/${'userName'}`)

        const data = await res.json()

    }

    function handleSubmit(){

    }

    useEffect(()=>{
        fetchGithubUserData()
    }, [])

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
    </div>
    
}