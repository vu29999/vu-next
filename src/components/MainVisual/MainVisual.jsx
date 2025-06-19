"use client";

import React, { useRef } from "react";
import "./MainVisual.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Link from "next/link";
import Image from "next/image";

import dataVisual from "../../fake-data/data-MainVisual";

const MainVisual = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="main-visual-wrap">
            <div className="main-visual-box">
                <div className="main-visual-content">
                    <div className="custom-navigation">
                        <button ref={prevRef} className="swiper-button-prev custom-nav">‹</button>
                        <button ref={nextRef} className="swiper-button-next custom-nav">›</button>
                    </div>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        loop={true}
                        spaceBetween={50}
                        slidesPerView={1}
                        speed={800}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                    >
                        {dataVisual.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="main-visual-item">
                                    <div className="main-visual-left">
                                        <Link href={item.link}>
                                            <Image
                                                src={item.img}
                                                alt={item.title}
                                                width={500}
                                                height={300}
                                                className="main-visual-img"
                                            />
                                        </Link>
                                    </div>
                                    <div className="main-visual-right">
                                        <h4>{item.title}</h4>
                                        <div className="main-visual-desc">
                                            <p><span>{item.description}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default MainVisual;
