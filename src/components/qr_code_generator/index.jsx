import { useState } from "react"



export default function QRCode(){

    const[qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')

    function handleGenerateCode(){
        setQrCode(input)
    }




    return <div>
        <h1>QR Code Generator</h1>
        <div>
            <input onChange={(e) => setInput(e.target.value)} type="text" name="qr_code" placeholder="Enter your value here!"/>
            <button disabled={input && input.trim() ! == ''? false :true } onClick={handleGenerateCode}>Generate</button>
        </div>
        <div>
            <QRCode 
            id="qr_code_value" value={qrCode} size={400} bgColor="#fff"/>
        </div>
    </div>

}