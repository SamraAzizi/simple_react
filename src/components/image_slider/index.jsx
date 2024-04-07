import { useEffect, useState } from "react"


export default function ImageSlider(url, limit){

    const[image, setImage] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [error, setError] = useState(null);

    async function fectchImages(getUrl){
        try{
            const response = await fetch(getUrl);
            const data = await response.json();

        }catch(e){
            setError(e.message);

        }

    }

    useEffect(()=>{
        if(url !== '')  fectchImages()

    },[url] )


    return <div className="container"></div>
    
}