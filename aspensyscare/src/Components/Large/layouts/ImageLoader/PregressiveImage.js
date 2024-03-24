import React,{useState,useEffect} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function PregressiveImage ({ imgSrc, previewSrc,classname}) {

    const [ usedSrc, setUsedSrc ] = useState(previewSrc);
    const [ usedEffectStyle, setUsedEffectStyle ] = useState({ filter: 'blur(5px)', clipPath: 'inset(0)' });

    useEffect(() => {
        const img = new Image();
        img.src = imgSrc;
        img.onload = () => {
            setUsedSrc(img.src);
            setUsedEffectStyle({});
        } 
    }, []);

    //return <img src={usedSrc} className={classname} style={{ transition: 'filter 0.1s ease-out', ...usedEffectStyle }} alt=""/>;
     return <LazyLoadImage  className={classname} effect="blur" src={imgSrc}  alt=""/>;

}