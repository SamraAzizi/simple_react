
import {FaStar} from 'react-icons/fa'


export default fucntion starRating({numOfStars = 5}){

    return <div className="star_rating">

    {
        [...Array(numOfStars)].map((_,index) =>{
            return <FaStar 
            key={index}
            onClick={}
            onMouseMove={}
            onMouseLeave={}

            
            />
        })
    }
    
    </div>

}