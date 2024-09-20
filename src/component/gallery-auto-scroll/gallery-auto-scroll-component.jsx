import { useState, useEffect } from 'react';
import './gallery-auto-scroll.style.scss';

const GalleryAutoScroll = ({ data }) => {
    const [newIndex, setIndex] = useState({
        index: 0,
        className: ''
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prevState) => ({
                index: (prevState.index + 1) % data.length,
                className: 'activation__item'
            }));
        }, 5000);

        return () => clearTimeout(timer);
    }, [newIndex.index, data.length]);

    const handleOnClickPagination = (index) => () => {
        setIndex((prevState) => ({
            index,
            className: 'activation__item'
        }));
    };

    return (
        <div className="gallery-auto-scroll__container">
            {data.map((item, index) => (
                <div
                    key={index}
                    className={`gallery-auto-scroll__item ${newIndex.index === index ? newIndex.className : ''}`}
                    // style={{ zIndex: newIndex.index === index ? 1 : 0 }}
                >                    
                    <div className='gallery-auto-scroll__image'>
                        <img src={item.image} alt={item.title || item.autor || 'Image'} />
                    </div>
                    <div className='gallery-auto-scroll__text'>
                        <p className='gallery-auto-scroll__text--fraseCelebre'>{item.fraseCelebre}</p>
                        <span className='gallery-auto-scroll__text--autor'>{item.autor}</span>
                        <span className='gallery-auto-scroll__text--reconocimiento'>{item.reconocimiento}</span>
                    </div>
                </div>
            ))}
            <div className='gallery-auto-scroll__position'>
                {data.map((_, index) => (
                    <div
                        key={index}
                        className={`pagination-dot ${newIndex.index === index ? 'pagination-active' : ''}`}
                        onClick={handleOnClickPagination(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default GalleryAutoScroll;
