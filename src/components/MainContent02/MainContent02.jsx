import React from "react";
import "./MainContent02.css";
import Link from 'next/link';
import Image from 'next/image';

const MainContent02 = () => {

    return (
        <>
            <div className="main-content-wrap02">
                <div className="main-content-box02">
                    <div className="wrap-image">
                        <ul>
                            <li>
                                <Link href="#" title="스튜디오 예약">
                                    <div className="images">
                                        <Image
                                            src="/images/main/img-category-01.png"
                                            alt="images"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: '100%' }}
                                        />
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <div className="icon">
                                                <Image
                                                    src="/images/common/ico-lecture.png"
                                                    alt="icon lecture"
                                                    width={64}
                                                    height={64}
                                                />
                                            </div>
                                            <ul>
                                                <li>교과목안내</li>
                                                <li>강의시간표 및 강의계획안의 정보</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" title="강의실 예약">
                                    <div className="images">
                                        <Image
                                            src="/images/main/img-category-02.png"
                                            alt="images"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: '100%' }}
                                        />
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <div className="icon">
                                                <Image
                                                    src="/images/common/studio.png"
                                                    alt="icon studio"
                                                    width={64}
                                                    height={64}
                                                />
                                            </div>
                                            <ul>
                                                <li>강의시간표</li>
                                                <li>강의시간표 및 강의계획안의 정보</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" title="기자재(장비) 대여 예약">
                                    <div className="images">
                                        <Image
                                            src="/images/main/img-category-03.png"
                                            alt="images"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: '100%' }}
                                        />
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <div className="icon">
                                                <Image
                                                    src="/images/common/equipment.png"
                                                    alt="icon equipment"
                                                    width={64}
                                                    height={64}
                                                />
                                            </div>
                                            <ul>
                                                <li>취업정보</li>
                                                <li>알찬 취업정보를 알려드립니다.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    );
};

export default MainContent02;


