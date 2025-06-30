"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image';
import "./HeaderStyle.css";
import menuData from "../Header/MenuData";
import MenuMobileStyle from "./MenuMobileStyle";
import PopSiteMap from '../Header/popSiteMap';

const MenuStyle02 = () => {
    const [hoverIndex, setHoverIndex] = useState(null);
    const pathname = usePathname();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <header>
            <div
                className={`header-wrap02 header-wrap03 ${hoverIndex !== null ? "on" : ""}`}
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
                                                <Link href={menuItem.path} title={menuItem.title}>{menuItem.title}</Link>

                                                {hoverIndex === index && (
                                                    <div className="sub-mn-box">
                                                        {Array.isArray(menuItem.sub) && (
                                                            <ul className="depth_02">
                                                                {menuItem.sub.map((sub, subIndex) => {
                                                                    const isSubActive =
                                                                        pathname === sub.path ||
                                                                        pathname.startsWith(sub.path + "/") ||
                                                                        sub.subSub?.some(subsub =>
                                                                            pathname === subsub.path ||
                                                                            pathname.startsWith(subsub.path + "/")
                                                                        );

                                                                    return (
                                                                        <li key={subIndex} className={isSubActive ? "active" : ""}>
                                                                            <Link href={sub.path} title={sub.title}>{sub.title}</Link>

                                                                            {Array.isArray(sub.subSub) && sub.subSub.length > 0 && (
                                                                                <ul className="depth_03">
                                                                                    {sub.subSub.map((item, idx) => {
                                                                                        const isSubSubActive = pathname === item.path;
                                                                                        return (
                                                                                            <li key={idx} className={isSubSubActive ? "active" : ""}>
                                                                                                <Link href={item.path} title={item.title}>{item.title}</Link>
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
                            <PopSiteMap menuData={menuData} />
                            <MenuMobileStyle
                                menuData={menuData}
                                isOpen={isMobileOpen}
                                setIsOpen={setIsMobileOpen}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MenuStyle02;
