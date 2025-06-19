'use client';

import { useRef } from 'react';
import "./MainContent01.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Link from 'next/link';
import Image from 'next/image';
import dataMainNotice from '../../fake-data/data-MainNotice';
import dataMainGallery from '../../fake-data/data-MainGallery';

import { Scrollbar, Navigation, Pagination } from 'swiper/modules';

const MainContent01 = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const paginationRef = useRef(null);
    return (
        <>
            <div className="main-content-wrap01">
                <div className="main-content-box01">
                    <div className="main-mini-wrap main-top">
                        <div className="main-mini-box main-mini-box01">
                            <div className="main-title">
                                <Link href="#a">
                                    <h3>공지사항</h3>
                                </Link>
                            </div>
                            <ul className="mini-board-content">
                                {dataMainNotice.notice.map(item => (
                                    <li key={item.id}>
                                        <span className={`category ${item.categoryClass}`}>{item.category}</span>
                                        <Link href={item.link} title={item.title}>{item.title}</Link>
                                        <p className="board-right">{item.date}</p>
                                    </li>
                                ))}
                            </ul>
                            <Link className="btn-more" href="#a" title="더보기">
                                <Image
                                    src="/images/common/ico-plus.png"
                                    alt="더보기"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                        </div>
                        <div className="main-mini-box main-mini-box02">
                            <div className="main-title">
                                <Link href="#a">
                                    <h3>행사일정</h3>
                                </Link>
                            </div>
                            <ul className="mini-board-content">
                                {dataMainNotice.schedule.map(item => (
                                    <li key={item.id}>
                                        <span className="date">&nbsp;{item.date}</span>
                                        <Link href={item.link} title={item.title}>&nbsp;{item.title}</Link>
                                    </li>
                                ))}
                            </ul>
                            <Link className="btn-more" href="#a" title="더보기">
                                <Image
                                    src="/images/common/ico-plus.png"
                                    alt="더보기"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="main-mini-wrap main-bot">
                        <div className="mini-slide-content">
                            <div className="mini-slide-left">
                                <h3>포토갤러리</h3>
                                <p className="slide-des">Photo Gallery</p>
                                <div className="btn-more">
                                    <Link href="#" title="more">more
                                        <span>
                                            <Image
                                                src="/images/common/ico-arrow-right.png"
                                                alt="more"
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                    </Link>
                                </div>
                                <div className="slide-arrow">
                                    <button ref={prevRef} className="swiper-button-prev">
                                        <Image
                                            src="/images/common/icon-left-sl.png"
                                            alt="icon left"
                                            width={27}
                                            height={27}
                                        />
                                    </button>
                                    <div ref={paginationRef} className="swiper-pagination-unique"></div>
                                    <button ref={nextRef} className="swiper-button-next">
                                        <Image
                                            src="/images/common/icon-right-sl.png"
                                            alt="icon right"
                                            width={27}
                                            height={27}
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="mini-slide-right">
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar]}
                                    loop={false}
                                    spaceBetween={40}
                                    slidesPerView={3.6}
                                    speed={800}
                                    pagination={{
                                        el: paginationRef.current,
                                        clickable: true,
                                    }}
                                    navigation={{
                                        prevEl: prevRef.current,
                                        nextEl: nextRef.current,
                                    }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    scrollbar={{
                                        // hide: false,
                                        // draggable: true,
                                        el: ".swiper-scrollbar-01",
                                        hide: true,
                                    }}


                                    onInit={(swiper) => {
                                        // Link custom elements
                                        swiper.params.navigation.prevEl = prevRef.current;
                                        swiper.params.navigation.nextEl = nextRef.current;
                                        swiper.params.pagination.el = paginationRef.current;

                                        swiper.navigation.init();
                                        swiper.navigation.update();

                                        swiper.pagination.init();
                                        swiper.pagination.render();
                                        swiper.pagination.update();
                                    }}
                                    breakpoints={{
                                        1: {
                                            slidesPerView: 1.2,
                                            spaceBetween: 20,
                                        },
                                        500: {
                                            slidesPerView: 1.6,
                                            spaceBetween: 20,

                                        },
                                        768: {
                                            slidesPerView: 2.2,
                                            spaceBetween: 20,

                                        },
                                        1200: {
                                            slidesPerView: 2.6,
                                            spaceBetween: 40,
                                            clickable: true,
                                        },
                                        1500: {
                                            slidesPerView: 3.6,
                                            spaceBetween: 40,
                                            clickable: true,
                                        },
                                    }}
                                >

                                    {dataMainGallery.map(item => (
                                        <SwiperSlide key={item.id}>
                                            <div className="mini-slide-box">
                                                <Link href={item.link} target="_blank" title={item.title}>
                                                    <div className="slide-img">
                                                        <Image
                                                            src={item.img}
                                                            alt={item.title}
                                                            width={0}
                                                            height={0}
                                                        />
                                                    </div>
                                                    <div className="slide-txt">
                                                        <h4 className="slide-title">{item.title}</h4>
                                                        <p className="slide-title-sub">{item.date}</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                    ))}

                                    <div className="swiper-scrollbar-01"></div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainContent01;

