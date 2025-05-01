import { Navigation, Pagination, EffectCoverflow, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles #D2F159
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef, useState } from 'react';

const SliderForAllScreens = ({ sliderImages = [], shapeBg = 'bg-[#D2F159]', sliderBg = 'bg-black' }) => {
    const swiperRef = useRef(null);
    const [currentSlider, setCurrentSlider] = useState(0);

    const prevSlider = () => swiperRef.current?.slidePrev();
    const nextSlider = () => swiperRef.current?.slideNext();
    return (
        <div className={`min-h-fit relative pt-16 pb-24 overflow-hidden ${sliderBg}`}>
            <Swiper
                onSlideChange={(swiper) => setCurrentSlider(swiper.realIndex)}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    setCurrentSlider(swiper.realIndex);
                }}
                slidesPerView={2}
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    scale: 0.9,
                    slideShadows: false,
                    position: 'relative',
                    zIndex: -10,
                }}
                pagination={false}
                modules={[EffectCoverflow, A11y]}
                className="mySwiper relative z-20"
                spaceBetween={10}
            >
                {sliderImages.map((slide, inx) => (
                    <SwiperSlide key={inx} className='relative z-20'>
                        <img
                            src={slide.img}
                            alt={`Slider Image ${inx + 1}`}
                            className="w-full h-full "
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="max-w-6xl relative mx-auto w-full h-full flex items-center justify-between mt-4 gap-x-4 z-50 px-5">
                {/* Left Arrow */}
                <button
                    onClick={prevSlider}
                    className="flex justify-center items-center rounded-full w-6 h-6 md:w-8 md:h-8"
                >
                    {/* SVG LEFT */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M22 9L22 15C22 20 20 22 15 22L9 22C4 22 2 20 2 15L2 9C2 4 4 2 9 2L15 2C20 2 22 4 22 9Z"
                            stroke="#FFFFFF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M13.4604 8.47021L9.94043 12.0002L13.4604 15.5302"
                            stroke="#FFFFFF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                {/* Progress Bar */}
                <div className="w-full h-0.5 flex bg-[#FFFFFF]/30 rounded-[10px]">
                    {sliderImages.map((_, inx) => (
                        <div
                            key={inx}
                            className={`h-0.5 rounded-[10px] ${currentSlider === inx ? 'bg-white' : 'bg-transparent'
                                }`}
                            style={{
                                width: `${100 / sliderImages.length}%`,
                            }}
                        ></div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={nextSlider}
                    className="flex justify-center items-center rounded-full w-6 h-6 md:w-8 md:h-8"
                >
                    {/* SVG RIGHT */}
                    <svg className="rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M22 9L22 15C22 20 20 22 15 22L9 22C4 22 2 20 2 15L2 9C2 4 4 2 9 2L15 2C20 2 22 4 22 9Z"
                            stroke="#FFFFFF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M13.4604 8.47021L9.94043 12.0002L13.4604 15.5302"
                            stroke="#FFFFFF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
            <div className="relative flex items-center justify-center">
                <div className="absolute">
                    <div className={`h-80 w-80 scale-y-[1.5] scale-x-[6] blur-[60px] rounded-full ${shapeBg}`}></div>
                </div>
            </div>
        </div>
    );
};

export default SliderForAllScreens;