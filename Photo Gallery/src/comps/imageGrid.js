import React from "react";
import useFirestore from '../hooks/useStorage';

const ImageGrid = () => {

    const { docs } = useFirestore('images');
    return (
        <div className="img-grid">
        {
            docs && docs.map(doc => {
                <div className="img-wrap" key={doc.id}>
                    <img src={doc.url} alt="Uploaded pic" />
                </div>
            })
        }
        </div>
    )
}

export default ImageGrid;