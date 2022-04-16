import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

export default function App() {
    const productsImages = [
        'https://upload.wikimedia.org/wikipedia/commons/2/20/AchenseeWinter05.JPG',
        'https://i.imgur.com/fsyrScY.jpg',
        'https://w0.peakpx.com/wallpaper/590/395/HD-wallpaper-orange-sky-beautiful-turkey-weather.jpg',
        'https://www.adonde-y-cuando.es/site/images/illustration/bonito-mato-grosso-do-sul.jpg',
        'https://lirp.cdn-website.com/b7e11d27/dms3rep/multi/opt/78216223d878144e34c648e0bbd28f2e-3687df92-640w.jpg',
    ]
    const [toggler, setToggler] = useState(false);
    const [productIndex, setProductIndex] = useState(0);

    return (
        <>
            {productsImages.map((value,i) =>{
                return <button key={i} onClick={() => {
                    setProductIndex(i);
                    setTimeout(() => {
                        setToggler(!toggler);
                    }, 100);
                }}>
                    Imagén {i}
                </button>

            })}
            <FsLightbox
                toggler={toggler}
                sources={[productsImages[productIndex]]}
                key={productIndex}
            />
        </>
    );
}