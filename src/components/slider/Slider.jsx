import React, { useState } from 'react';
import cl from './Slider.module.css';

export default function Slider() {
    const images = [
        "https://avatars.mds.yandex.net/i?id=1dda2f2ccba5784b716cc624b3f5f968_l-5345995-images-thumbs&n=13",
        "https://avatars.mds.yandex.net/i?id=52ec599e5aa7a67302840c4008b9dbfd_l-10639206-images-thumbs&n=13",
    ];
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    return (
        <div className={cl.sliderContainer}>
            <div
                className={cl.slidesContainer}
                style={{ transform: `translateX(-${slide * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className={cl.slide}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className={cl.arrowPrev} onClick={prevSlide}>
                &#10094;
            </div>
            <div className={cl.arrowNext} onClick={nextSlide}>
                &#10095;
            </div>
        </div>
    );
}
