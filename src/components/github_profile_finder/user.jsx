


export default function User({user}){
    const {avator_url, followers,following,public_reports, name, login} = user;

    

    return <div className="user">
        <div>
            <img src="avator_url" className="avator" alt="User" />

        </div>
        <div>

              <a href={`https"//github.com/${login}`}>{name || login}</a>

        </div>


    </div>

}