"use client";

import { usePathname } from "next/navigation";
import "./TitlePage.css";

const TitlePage = ({ menuData }) => {
    const path = usePathname();

    let menu1 = null;
    let menu2 = null;
    let menu3 = null;

    menuData.forEach(item => {
        if (
            path === item.path ||
            path.startsWith(item.path + "/") ||
            (item.sub && item.sub.some(sub =>
                path === sub.path ||
                path.startsWith(sub.path + "/") ||
                (sub.subSub && sub.subSub.some(subsub =>
                    path === subsub.path || path.startsWith(subsub.path + "/")
                ))
            ))
        ) {
            menu1 = item;

            if (item.sub) {
                item.sub.forEach(sub => {
                    if (
                        path === sub.path ||
                        path.startsWith(sub.path + "/") ||
                        (sub.subSub && sub.subSub.some(subsub => path === subsub.path || path.startsWith(subsub.path + "/")))
                    ) {
                        menu2 = sub;

                        if (sub.subSub) {
                            const subSubMatch = sub.subSub.find(subsub =>
                                path === subsub.path || path.startsWith(subsub.path + "/")
                            );
                            if (subSubMatch) {
                                menu3 = subSubMatch;
                            }
                        }
                    }
                });
            }
        }
    });

    return (
        <div className="title-box">
            <div className="sub-title">
                <h3>{menu3?.title || menu2?.title || menu1?.title}</h3>
            </div>
        </div>
    );
};

export default TitlePage;
