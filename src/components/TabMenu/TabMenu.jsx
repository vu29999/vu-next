"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import "./TabMenu.css"

const TabMenu = ({ menuData }) => {
    const path = usePathname();

    // Tìm menu cấp 2 hiện tại dựa trên path
    const currentSub = menuData.flatMap(menu => menu.sub || [])
        .find(sub =>
            path === sub.path ||
            path.startsWith(sub.path + "/") ||
            (sub.subSub && sub.subSub.some(subsub =>
                path === subsub.path || path.startsWith(subsub.path + "/")
            ))
        );

    const subSubMenus = currentSub?.subSub || [];

    const len = subSubMenus.length;
    const cls = `row${len < 10 ? "0" : ""}${len}`;

    return (
        len > 0 && (
            <ul className={classNames("tab-ul01", cls)}>
                {subSubMenus.map((menu, index) => {
                    const isActive = path.startsWith(menu.path);
                    const isFirst = index === 0;
                    const isLast = index === len - 1;

                    return (
                        <li
                            key={menu.menuCd || index}
                            className={classNames({
                                active: isActive,
                                first: isFirst,
                                last: isLast,
                            })}
                        >
                            <Link href={menu.path} id={`tab-menu-${menu.menuCd}`}>
                                <span>{menu.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        )
    );
};

export default TabMenu;
