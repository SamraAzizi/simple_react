import { useEffect, useState } from "react"


export default function ImageSlider(url, limit){

    const[image, setImage] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    async function fectchImages(getUrl){

    }

    useEffect(()=>{
        if(url !== '')  fectchImages()

    },[url] )


    return <div className="container"></div>
    
}