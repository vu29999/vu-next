"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./PathNavigator.css";

// Tìm menu cấp 1 theo path hiện tại
const findCurrentMenu = (menuData, path) => {
    return menuData.find(menu =>
        path === menu.path ||
        path.startsWith(menu.path + "/") ||
        menu.sub?.some(sub =>
            path === sub.path ||
            path.startsWith(sub.path + "/") ||
            sub.subSub?.some(subsub => path === subsub.path || path.startsWith(subsub.path + "/"))
        )
    );
};

// Tìm menu cấp 2 theo path hiện tại
const findCurrentSub = (menu, path) => {
    return menu?.sub?.find(sub =>
        path === sub.path ||
        path.startsWith(sub.path + "/") ||
        sub.subSub?.some(subsub => path === subsub.path || path.startsWith(subsub.path + "/"))
    );
};

const PathNavigator = ({ menuData }) => {
    const path = usePathname();
    const currentMenu = findCurrentMenu(menuData, path);
    const currentSub = findCurrentSub(currentMenu, path);

    const [activeMenu1, setActiveMenu1] = useState(false);
    const [activeMenu2, setActiveMenu2] = useState(false);

    const menu1Ref = useRef(null);
    const menu2Ref = useRef(null);
    const menu1NodeRef = useRef(null);
    const menu2NodeRef = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if (
                !menu1Ref.current?.contains(e.target) &&
                !menu2Ref.current?.contains(e.target)
            ) {
                setActiveMenu1(false);
                setActiveMenu2(false);
            }
        };

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    useEffect(() => {
        setActiveMenu1(false);
        setActiveMenu2(false);
    }, [path]);

    return (
        <div className="path-wrap">
            <div className="path-box">
                <div className="path">
                    <Link href="/" className="path-home" title="홈 바로가기">
                        <span className="hide">홈 바로가기</span>
                    </Link>

                    <div className="path-depth-wrap">
                        <ul>
                            {/* Menu cấp 1 */}
                            <li ref={menu1Ref} className={activeMenu1 ? "active" : ""}>
                                <button
                                    className={`path-selected ${activeMenu1 ? "active" : ""}`}
                                    onClick={() => setActiveMenu1(prev => !prev)}
                                >
                                    {currentMenu?.title || "메뉴 전체 보기"}
                                </button>

                                <CSSTransition
                                    in={activeMenu1}
                                    timeout={300}
                                    classNames="fade"
                                    unmountOnExit
                                    nodeRef={menu1NodeRef}
                                >
                                    <ul className="path-depth" ref={menu1NodeRef}>
                                        {menuData.map((menu, i) => (
                                            <li key={i}>
                                                <Link
                                                    href={menu.path}
                                                    className={currentMenu?.path === menu.path ? "active" : ""}
                                                >
                                                    {menu.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </CSSTransition>
                            </li>

                            {/* Menu cấp 2 */}
                            {currentMenu?.sub && (
                                <li ref={menu2Ref} className={activeMenu2 ? "active" : ""}>
                                    <button
                                        className={`path-selected ${activeMenu2 ? "active" : ""}`}
                                        onClick={() => setActiveMenu2(prev => !prev)}
                                    >
                                        {currentSub?.title || "서브 메뉴"}
                                    </button>

                                    <CSSTransition
                                        in={activeMenu2}
                                        timeout={300}
                                        classNames="fade"
                                        unmountOnExit
                                        nodeRef={menu2NodeRef}
                                    >
                                        <ul className="path-depth" ref={menu2NodeRef}>
                                            {currentMenu.sub.map((sub, i) => {
                                                const isActive =
                                                    path === sub.path ||
                                                    sub.subSub?.some(subsub => path === subsub.path);

                                                return (
                                                    <li key={i}>
                                                        <Link
                                                            href={sub.path}
                                                            className={isActive ? "active" : ""}
                                                        >
                                                            {sub.title}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </CSSTransition>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PathNavigator;
