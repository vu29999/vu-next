"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image';
import "../headerStyle.css";
import menuData from "../../../../components/Header/MenuData";
import MenuMobileStyle from "../MenuMobileStyle";

const MenuStyle01 = () => {
    const pathname = usePathname();
    const [hoverIndex, setHoverIndex] = useState(null);
    const bgRef = useRef(null);
    const subBoxRefs = useRef([]);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const getMaxSubBoxHeight = () => {
        return subBoxRefs.current.reduce((max, el) => {
            return el ? Math.max(max, el.offsetHeight) : max;
        }, 0);
    };

    useEffect(() => {
        if (hoverIndex !== null && bgRef.current) {
            bgRef.current.style.height = `${getMaxSubBoxHeight()}px`;
        } else if (bgRef.current) {
            bgRef.current.style.height = `0px`;
        }
    }, [hoverIndex]);

    return (
        <header>
            <div
                className={`header-wrap02 ${hoverIndex !== null ? "on" : ""}`}
                onMouseLeave={() => setHoverIndex(null)}
            >
                <div className="top-header-wrap02">
                    <div className="top-header-box">
                        <ul className="top-util-box">
                            <li><Link href="/" title="home">Home</Link></li>
                            <li><Link href="/login" title="로그인">로그인</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="bottom-header-wrap02">
                    <div className="bottom-header-box">
                        <div className="bottom-header-content">
                            <h1>
                                <Link href="/" title="원격교육지원센터">
                                    <Image
                                        src="/images/common/logo-v.png"
                                        alt="원격교육지원센터"
                                        className="logo-w"
                                        width={140}
                                        height={40}
                                    />
                                    <Image
                                        src="/images/common/logo-b.png"
                                        alt="원격교육지원센터"
                                        className="logo-b"
                                        width={140}
                                        height={40}
                                    />
                                </Link>
                            </h1>

                            <div className="gnb">
                                <ul className="depth_01">
                                    {menuData.map((menuItem, index) => {
                                        const isMenuActive =
                                            pathname.startsWith(menuItem.path) ||
                                            menuItem.sub?.some(sub =>
                                                pathname.startsWith(sub.path) ||
                                                sub.subSub?.some(subsub => pathname.startsWith(subsub.path))
                                            );

                                        return (
                                            <li
                                                key={index}
                                                className={(hoverIndex === index || isMenuActive) ? "on-menu" : ""}
                                                onMouseEnter={() => setHoverIndex(index)}
                                            >
                                                <Link href={menuItem.path}>{menuItem.title}</Link>
                                                {hoverIndex === index && (
                                                    <div
                                                        className="sub-mn-box"
                                                        ref={el => subBoxRefs.current[index] = el}
                                                    >
                                                        {Array.isArray(menuItem.sub) && (
                                                            <ul className="depth_02">
                                                                {menuItem.sub.map((sub, subIndex) => {
                                                                    const isSubActive =
                                                                        pathname === sub.path ||
                                                                        pathname.startsWith(sub.path + "/") ||
                                                                        sub.subSub?.some(subsub =>
                                                                            pathname.startsWith(subsub.path)
                                                                        );

                                                                    return (
                                                                        <li key={subIndex} className={isSubActive ? "active" : ""}>
                                                                            <Link href={sub.path}>{sub.title}</Link>

                                                                            {Array.isArray(sub.subSub) && sub.subSub.length > 0 && (
                                                                                <ul className="depth_03">
                                                                                    {sub.subSub.map((item, idx) => {
                                                                                        const isSubSubActive = pathname === item.path;
                                                                                        return (
                                                                                            <li key={idx} className={isSubSubActive ? "active" : ""}>
                                                                                                <Link href={item.path}>{item.title}</Link>
                                                                                            </li>
                                                                                        );
                                                                                    })}
                                                                                </ul>
                                                                            )}
                                                                        </li>
                                                                    );
                                                                })}
                                                            </ul>
                                                        )}
                                                    </div>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            <MenuMobileStyle
                                menuData={menuData}
                                isOpen={isMobileOpen}
                                setIsOpen={setIsMobileOpen}
                            />
                            <div className="gnb-bg-menu" ref={bgRef}></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MenuStyle01;
