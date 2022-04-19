//import React, { useState } from 'react';
//import FsLightbox from 'fslightbox-react';
import Lightbox from "react-awesome-lightbox"

export default function App() {
    const images = [
        {
            url: "https://picsum.photos/id/237/536/354",
            title: "Imagen title 1"
        },
        {
            url: "https://picsum.photos/seed/picsum/536/354",
            title: "Imagen title 2"
        },
        {
            url: "https://picsum.photos/id/1084/536/354?grayscale",
            title: "Imagen title 3"
        },
        {
            url: "https://picsum.photos/id/1060/536/354?blur=2",
            title: "Imagen title 4"
        }, 
        {
            url: "https://picsum.photos/id/870/536/354?grayscale&blur=2",
            title: "Imagen title 5"
        }, 
    ]

    return (<>
        <h1>Holaaaaaa</h1>

        <Lightbox images={images} startIndex={2}/>

    </>);
}