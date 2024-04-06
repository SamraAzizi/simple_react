
import { useState } from 'react'
import {FaStar} from 'react-icons/fa'


export default fucntion starRating({numOfStars = 5}){

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);


    function handleClick(getCurrentIndex){

    }
    function handleMouseEnter(getCurrentIndex){


    }
    function handleMouseLeave(getCurrentIndex){

    }

    return <div className="star_rating">

    {
        [...Array(numOfStars)].map((_,index) =>{
            index += 1
                                                                                                         
            return <FaStar 
            key={index}
            onClick={()=> handleClick(index)}
            onMouseMove={}
            onMouseLeave={}
            size = {40}

            
            />
        })
    }
    
    </div>

}