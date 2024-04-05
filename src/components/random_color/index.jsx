import { useState } from "react";



export default function RamdomColor(){
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000')
    return (
        <div styel={{
            width:'100vw',
            height: '100vh',
            background: color,
        }
             
        }>
            <button>Create HEX color</button>
            <button>Create RGB color</button>
    <button>Generate Color</button>
    </div>
    );
} 