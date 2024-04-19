


export default function User({ user }) {
    const { avator_url, followers, following, public_reports, name, login, created_at } = user;

    const createdDate = new Data(created_at)

    return <div className="user">
        <div>
            <img src="avator_url" className="avator" alt="User" />

        </div>
        <div>

            <a href={`https"//github.com/${login}`}>{name || login}</a>

            <p>User joined on {`${createdDate.getDate()} ${createdDate.toLocalString('en-us', { month: 'short' })} ${createdDate.getFullYear()}`}</p>


        </div>
        <div>

            <div>
                <p>Public repos</p>
                <p>{public_reports}</p>

            </div>
            <div>
                <p>followers</p>
                <p>{followers}</p>

            </div>
            <div>
                <p>following</p>
                <p>{following}</p>
            </div>
        </div>


    </div>

}