import React, { useState } from "react";
import { useDropzone } from "react-dropzone"

const DrapDropFile = () => {
    const [files, setFiles] = useState([])

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            acceptedFiles.map((file) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    setFiles(acceptedFiles.map((file) =>
                        Object.assign(file, {
                            preview: URL.createObjectURL(file),
                            base64Image: e.target.result})
                    )
                    )
                }
                reader.readAsDataURL(file)
            })
            console.log(files);
        },
    })

    const images = files.map((file) => 
    {
        console.log(file)
        return     (
            <div key={file.name}>
                <div>
                    <img src={file.preview} style={{width:"200px"}} alt="preview"/>
                </div>
            </div>
        )
    })

    return (
        <div>
        <div className="App">
            <div {...getRootProps()}>
                <input {...getInputProps()}/>
                <p style={{width: "400px", height:"200px", border: "solid"}}>Drop file here</p>
            </div>
        </div>
        <div>{images}</div>
        </div>
    )
}

export default DrapDropFile;