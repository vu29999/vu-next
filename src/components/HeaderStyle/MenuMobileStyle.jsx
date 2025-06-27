'use client';

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import Image from 'next/image';

const MenuMobileStyle01 = ({ menuData }) => {
    const pathname = usePathname();
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [openMobileIndex, setOpenMobileIndex] = useState(null);
    const [openSubIndex, setOpenSubIndex] = useState(null);

    const isActive = useCallback((path) => {
        return pathname === path || pathname.startsWith(path + "/");
    }, [pathname]);

    useEffect(() => {
        menuData.forEach((menuItem, index) => {
            if (isActive(menuItem.path)) {
                setOpenMobileIndex(index);
                setOpenSubIndex(null);
            }

            menuItem.sub?.forEach((subItem, subIndex) => {
                if (isActive(subItem.path)) {
                    setOpenMobileIndex(index);
                    setOpenSubIndex(subIndex);
                }

                subItem.subSub?.forEach((subSubItem) => {
                    if (isActive(subSubItem.path)) {
                        setOpenMobileIndex(index);
                        setOpenSubIndex(subIndex);
                    }
                });
            });
        });
    }, [pathname, menuData, isActive]);

    useEffect(() => {
        if (isMobileOpen) {
            document.body.classList.add("open-menu");
        } else {
            document.body.classList.remove("open-menu");
        }
        return () => {
            document.body.classList.remove("open-menu");
        };
    }, [isMobileOpen]);

    return (
        <>

            <button className="mobi-toggle hamburger01" onClick={() => setIsMobileOpen(!isMobileOpen)}>
                <Image
                    src="/images/common/hamburger-ico.png"
                    alt="메뉴 열기"
                    className="hamb-one"
                    width={48}
                    height={48}
                />
            </button>

            {isMobileOpen && (
                <div className="mobile-menu">
                    <div className="m-gnb-top">
                        <ul>
                            <li>
                                <Link className="login" href="/login" title="로그인">
                                    로그인
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <button className="mobi-toggle hamburger02" onClick={() => setIsMobileOpen(false)}>
                        <Image
                            src="/images/common/hamburger-close.png"
                            alt="메뉴 닫기"
                            className="hamb-two"
                            width={48}
                            height={48}
                        />
                    </button>

                    {/* Menu01 */}
                    <div className="m-gnb-mid">
                        <ul className="dep1">
                            {menuData.map((menuItem, index) => {
                                const hasSub = Array.isArray(menuItem.sub) && menuItem.sub.length > 0;
                                const isMenuItemActive =
                                    isActive(menuItem.path) ||
                                    menuItem.sub?.some((sub) => isActive(sub.path)) ||
                                    menuItem.sub?.some((sub) =>
                                        sub.subSub?.some((subSub) => isActive(subSub.path))
                                    );

                                return (
                                    <li
                                        key={index}
                                        className={`${hasSub ? "has-sub" : ""} ${isMenuItemActive ? "active" : ""} ${openMobileIndex === index ? "open" : ""}`}
                                    >
                                        {hasSub ? (
                                            <a
                                                href="#!"
                                                title={menuItem.title}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    if (openMobileIndex !== index) {
                                                        setOpenMobileIndex(index);
                                                    }
                                                }}
                                            >
                                                {menuItem.title}
                                            </a>
                                        ) : (
                                            <Link
                                                href={menuItem.path}
                                                title={menuItem.title}
                                                onClick={() => setIsMobileOpen(false)}
                                            >
                                                {menuItem.title}
                                            </Link>
                                        )}

                                        {/* Menu2 */}
                                        <ul className={`dep2 ${openMobileIndex === index ? "open" : ""}`}>
                                            {menuItem.sub?.map((subItem, subIndex) => {
                                                const isSubActive =
                                                    isActive(subItem.path) ||
                                                    subItem.subSub?.some((subSubItem) =>
                                                        isActive(subSubItem.path)
                                                    );

                                                return (
                                                    <li
                                                        key={subIndex}
                                                        className={`${isSubActive ? "active" : ""} ${openSubIndex === subIndex ? "open" : ""}`}
                                                    >
                                                        <Link
                                                            href={subItem.path}
                                                            title={subItem.title}
                                                            onClick={() => setIsMobileOpen(false)}
                                                        >
                                                            {subItem.title}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default MenuMobileStyle01;
