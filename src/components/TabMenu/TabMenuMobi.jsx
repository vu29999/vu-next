"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import "./TabMenu.css"

const TabMenuMobi = ({ menuData }) => {
    const path = usePathname();

    const currentSub = menuData.flatMap(menu => menu.sub || [])
        .find(sub =>
            path === sub.path ||
            path.startsWith(sub.path + "/") ||
            (sub.subSub && sub.subSub.some(subsub =>
                path === subsub.path || path.startsWith(subsub.path + "/")
            ))
        );

    const subSubMenus = currentSub?.subSub || [];

    const [isOpen, setIsOpen] = useState(false);

    return (
        subSubMenus.length > 0 && (
            <div className="tab-mobile">
                <button
                    className="tab-toggle"
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    {
                        subSubMenus.find(item => path === item.path)?.title
                        || "선택하세요"
                    }
                </button>
                {isOpen && (
                    <ul className="tab-options">
                        {subSubMenus.map((menu, index) => (
                            <li key={index}>
                                <Link
                                    href={menu.path}
                                    onClick={() => setIsOpen(false)}
                                    className={classNames({ active: path === menu.path })}
                                >
                                    {menu.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        )
    );
};

export default TabMenuMobi;
