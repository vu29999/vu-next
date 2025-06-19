'use client';

import { useEffect, useRef, useState } from "react";
import Image from 'next/image';

const TableScroll = ({ children }) => {
    const containerRef = useRef(null);
    const [showHelp, setShowHelp] = useState(true);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        const handleScroll = () => {
            setShowHelp(false);
        };

        container.addEventListener("scroll", handleScroll);

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="table-wrap scrollbox" ref={containerRef}>
            {showHelp && (
                <div className="msg-touch-help" >
                    <Image
                        src="/images/common/ico-table-scroll.png"
                        alt="scroll icon"
                        width={40}
                        height={40}
                    />
                </div>
            )}
            {children}
        </div>
    );
};

export default TableScroll;
