"use client"
import { useEffect, useRef } from "react";
import "./QuickLink.css";
import Link from 'next/link';
import dataQuick from '../../fake-data/data-Quick';

const QuickLink = () => {

    const quickBoxRef = useRef(null);

    useEffect(() => {

        setTimeout(() => {
            document.documentElement.classList.remove('no-js');
        }, 10);

        if (window.App?.TableScroll?.init) {
            window.App.TableScroll.init();
        }

        const $sideBar = quickBoxRef.current;
        if (!$sideBar) return;

        const sideBarOffsetTop = $sideBar.offsetTop;
        const defaultTop = sideBarOffsetTop;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const stopPosition = 2700;

            if (scrollY > stopPosition) {
                $sideBar.style.position = 'absolute';
                $sideBar.style.top = `${stopPosition}px`;
            } else if (scrollY > sideBarOffsetTop) {
                $sideBar.style.position = 'absolute';
                $sideBar.style.top = `${scrollY + 60}px`;
            } else {
                $sideBar.style.position = 'absolute';
                $sideBar.style.top = `${defaultTop}px`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="quick-box" ref={quickBoxRef}>
                <p>QUICK LINK</p>
                <ul>
                    {dataQuick.map((item, index) => {
                        const isExternal = item.link.startsWith('http');
                        const linkContent = (
                            <span dangerouslySetInnerHTML={{ __html: item.title.join("<br />") }} />
                        );

                        const style = {
                            background: `url(${item.img}) no-repeat center top 10px`,
                        };

                        return (
                            <li key={index}>
                                {isExternal ? (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="새창열기"
                                        style={style}
                                    >
                                        {linkContent}
                                    </a>
                                ) : (
                                    <Link
                                        href={item.link}
                                        title="새창열기"
                                        style={style}
                                    >
                                        {linkContent}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ul>

                <a
                    className="btn-top"
                    href="#"
                    title="상단으로"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                >   TOP
                </a>
            </div>
        </>
    );
};

export default QuickLink;