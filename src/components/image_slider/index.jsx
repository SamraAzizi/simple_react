import { useEffect, useState } from "react"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill'} from 'react-icons/bs';
import './style.css';

export default function ImageSlider(url, limit=5, page=1){

    const[image, setImage] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading ] = useState(false);



    async function fectchImages(getUrl){
        try{
            const response = await fetch(`${getUrl}?page=${page}1&limit=${limit}`);
            const data = await response.json();
            if(data) {
                setImage(data)
                setLoading(false)
            }

        }catch(e){
            setError(e.message);
            setLoading(false)

        }

    }

    function handlePrevious(){
        setCurrentSlide(currentSlide === 0 ? image.length -1 : currentSlide -1) 

    }


    function handleNext(){
        setCurrentSlide(currentSlide === image.length -1 ? 0: currentSlide +1)
         
    }
    useEffect(()=>{
        if(url !== '')  fectchImages()

    },[url] )
    


    if(loading){
        return <div>Loading data! please wait</div>
    }
    if(error !== null){
        return <div>error occured! {error}</div>
    }


    return <div className="container">
        <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"/>{
            image && image.length ? 
            image.map((imageItem , index)=>(
                <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={currentSlide === index ? "current-image" : 'current-image hide-current-image'}
                
                />

            ) )
            : null

        }

        <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
        <span className="circle-indicators">{
            image && image.length ? 
            image.map((_,index)=> <button 
            key={index}
            className={currentSlide === index ? "current-indicator": "current-indicator hide-current-indicator"}
            onClick={()=> setCurrentSlide(index)}
            
            ></button>)

            :null

        }

        </span>
    </div>
    
}