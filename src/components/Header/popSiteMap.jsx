import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';

const PopSiteMap = ({ menuData }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="sitemap-wrap">
            <a className="popup-btn" href="#!" onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
            }}>
                <Image
                    src="/images/common/hamburger-map.png"
                    alt="Hamburger"
                    width={48}
                    height={48}
                />
            </a>

            {/* Popup sitemap */}
            <div className={`popup-gnb ${isOpen ? "active" : ""}`}>
                <div className="popup-gnb-wrap01">
                    <div className="popup-gnb-box">
                        <ul>
                            <li><a className="login" href="#!" title="로그인">로그인</a></li>
                        </ul>
                    </div>
                </div>

                <div className="popup-gnb-wrap02">
                    <div className="popup-gnb-box">
                        <ul className="sitemap">
                            {menuData.map((item, i) => (
                                <li key={i}>
                                    <Link href={item.path || "#"}>{item.title}</Link>
                                    {Array.isArray(item.sub) && (
                                        <ul className="sitemap-dep02">
                                            {item.sub.map((sub, j) => (
                                                <li key={j}>
                                                    <Link href={sub.path || "#"}>{sub.title}</Link>
                                                    {Array.isArray(sub.subSub) && sub.subSub.length > 0 && (
                                                        <ul className="sitemap-dep03">
                                                            {sub.subSub.map((subSub, k) => (
                                                                <li key={k}>
                                                                    <Link href={subSub.path || "#"}>{subSub.title}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="popup-gnb-wrap-close">
                    <div className="popup-gnb-box">
                        <a className="popup-close" href="#!" onClick={(e) => {
                            e.preventDefault();
                            setIsOpen(false);
                        }}>
                            <Image
                                src="/images/common/ico-close.png"
                                alt="Hamburger"
                                width={48}
                                height={48}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopSiteMap;
