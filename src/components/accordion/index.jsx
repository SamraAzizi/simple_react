import { useState } from "react";
import data from "./data";
import './style.css';
import { get } from "mongoose";


export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [EnableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([])
    function handleSingleSelection(getCurrentId) {
        console.log(getCurrentId)
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)
     
        if (findIndexOfCurrentId == -1)copyMultiple.push(getCurrentId)
        else copyMultiple.splice(findIndexOfCurrentId,1 )
        
        setMultiple(copyMultiple)
    }

    console.log(selected, multiple);
    return
    <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!EnableMultiSelection)}>Enable multi selection</button>
        <div className="accordion">{
            data && data.lenght > 0 ?
                data.map(dataItem => <div className="item">
                    <div onClick={EnableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>{
                        EnableMultiSelection ? 
                        multiple.indexOf(dataItem.id) !== -1 &&
                        <div className="content">{dataItem.answer}</div> : 
                        selected === dataItem.id && <div className="content">{dataItem.answer}</div> 
                    }

                </div>)
                : <div>No data found </div>
        }
        </div></div>;
}
