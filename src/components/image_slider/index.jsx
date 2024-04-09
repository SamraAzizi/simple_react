import { useEffect, useState } from "react"


export default function ImageSlider(url, limit=5, page=1){

    const[image, setImage] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading ] = useState(false);



    async function fectchImages(getUrl){
        try{
            const response = await fetch(`${getUrl}?page=${page}1&limit=${limit}`);
            const data = await response.json();
            if(data){
                setImage(data)
                setLoading(false)
            }

        }catch(e){
            setError(e.message);
            setLoading(false)

        }

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


    return <div className="container"></div>
    
}