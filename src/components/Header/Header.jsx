'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

import './Header.css';
import menuData from './MenuData';

const MenuMobile = dynamic(() => import('./MenuMobile'), { ssr: false });
const PopSiteMap = dynamic(() => import('./popSiteMap'), { ssr: false });

const Header = () => {
    const pathname = usePathname();
    const [hoverIndex, setHoverIndex] = useState(null);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const bgRef = useRef(null);
    const subBoxRefs = useRef([]);

    const getMaxSubBoxHeight = () => {
        return subBoxRefs.current.reduce((max, el) => {
            if (el) return Math.max(max, el.offsetHeight);
            return max;
        }, 0);
    };

    useEffect(() => {
        if (hoverIndex !== null && bgRef.current) {
            bgRef.current.style.height = `${getMaxSubBoxHeight()}px`;
        } else if (bgRef.current) {
            bgRef.current.style.height = '0px';
        }
    }, [hoverIndex]);

    const isActive = (item) => {
        if (!item.path) return false;
        if (pathname === item.path || pathname.startsWith(item.path + '/')) return true;
        if (Array.isArray(item.sub)) {
            return item.sub.some(sub => isActive(sub));
        }
        if (Array.isArray(item.subSub)) {
            return item.subSub.some(sub => isActive(sub));
        }
        return false;
    };

    const renderSubSubMenu = (subSubList) => (
        <ul className="depth_03">
            {subSubList.map((item, idx) => (
                <li key={idx} className={isActive(item) ? 'active' : ''}>
                    <Link href={item.path}>{item.title}</Link>
                </li>
            ))}
        </ul>
    );

    const renderSubMenu = (subList, parentIndex) => (
        <ul className="depth_02">
            {subList.map((sub, subIdx) => (
                <li key={subIdx} className={isActive(sub) ? 'active' : ''}>
                    <Link href={sub.path}>{sub.title}</Link>
                    {Array.isArray(sub.subSub) && sub.subSub.length > 0 && renderSubSubMenu(sub.subSub)}
                </li>
            ))}
        </ul>
    );

    return (
        <header>
            <div
                className={`header-wrap ${hoverIndex !== null ? 'on' : ''}`}
                onMouseLeave={() => setHoverIndex(null)}
            >
                <div className="top-header-wrap">
                    <div className="top-header-box">
                        <ul className="top-util-box">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/login">로그인</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="bottom-header-wrap">
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
                                        priority
                                    />
                                    <Image
                                        src="/images/common/logo-b.png"
                                        alt="원격교육지원센터"
                                        className="logo-b"
                                        width={140}
                                        height={40}
                                        priority
                                    />
                                </Link>
                            </h1>

                            <div className="gnb">
                                <ul className="depth_01">
                                    {menuData.map((menuItem, index) => (
                                        <li
                                            key={index}
                                            className={(hoverIndex === index || isActive(menuItem)) ? 'on-menu' : ''}
                                            onMouseEnter={() => setHoverIndex(index)}
                                        >
                                            <Link href={menuItem.path}>{menuItem.title}</Link>

                                            <div
                                                className="sub-mn-box"
                                                ref={(el) => (subBoxRefs.current[index] = el)}
                                            >
                                                {Array.isArray(menuItem.sub) &&
                                                    renderSubMenu(menuItem.sub, index)}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <PopSiteMap menuData={menuData} />
                            <MenuMobile
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

export default Header;
