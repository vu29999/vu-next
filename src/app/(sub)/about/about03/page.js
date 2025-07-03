'use client';

import TitlePage from "../../../../components/TitlePage/TitlePage";
import menuData from "../../../../components/Header/MenuData";
import CountUp from '../../../../components/CountUp/CountUp';

import Marquee from 'react-fast-marquee';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dataFAQ from '../../../../fake-data/data-FAQ';

import "./about03.css";

const About03 = () => {

    const items = [" Text 1", " Text 2", " Text 3"];
    const repeatedItems = Array(10).fill(items).flat();
    const items02 = [" Text 4", " Text 5", " Text 6"];
    const repeatedItems02 = Array(10).fill(items02).flat();

    const [activeIndex, setActiveIndex] = useState(null);
    const toggleIndex = (id) => {
        setActiveIndex(prev => (prev === id ? null : id));
    };

    const stats = [
        { label: 'Number 01', value: 1200 },
        { label: 'Number 02', value: 75 },
        { label: 'Number 03', value: 12 },
        { label: 'Number 04', value: 5 },
    ];
    return (
        <>

            <TitlePage menuData={menuData} />
            <div className="sub-content">
                <div className="content-box">
                    <div className="con-box no-pd">
                        <h4 className="h4-tit01">About 03</h4>
                    </div>
                </div>
            </div>
            <Marquee speed={30} pauseOnHover gradient={false} direction="left" style={{ margin: "0 0 20px" }}>
                {repeatedItems.map((item, idx) => (
                    <span key={idx} style={{ margin: "0 20px", whiteSpace: "nowrap" }}>
                        {item}
                    </span>
                ))}
            </Marquee>
            <Marquee speed={30} pauseOnHover gradient={false} direction="right">
                {repeatedItems02.map((item, idx) => (
                    <span key={idx} style={{ margin: "0 20px", whiteSpace: "nowrap" }}>
                        {item}
                    </span>
                ))}
            </Marquee>
            <div className="faq-container">

                {dataFAQ.map(item => (
                    <div key={item.id} className="faq-item">
                        <button className="faq-question" onClick={() => toggleIndex(item.id)}>
                            {item.question}
                        </button>
                        <AnimatePresence initial={false}>
                            {activeIndex === item.id && (
                                <motion.div
                                    className="faq-answer-wrapper"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="faq-answer">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>
                ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', maxWidth: 600, margin: '100px auto' }}>
                {stats.map((item, idx) => (
                    <div key={idx} style={{ textAlign: 'center' }}>
                        <CountUp targetNumber={item.value} duration={1500} />
                        <div>{item.label}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default About03;


// 'use client';

// import Marquee from 'react-fast-marquee';

// export default function MarqueeExample() {
//   return (
//     <Marquee
//       speed={50}
//       pauseOnHover
//       gradient={false}
//       direction="right"
//       style={{ height: "50px", alignItems: "center" }}
//     >
//       🔔
//       <span style={{ margin: '0 20px' }}>🔼 Text 1</span>
//       <span style={{ margin: '0 20px' }}>🔼 Text 2</span>
//       <span style={{ margin: '0 20px' }}>🔼 Text 3</span>
//     </Marquee>
//   );
// }
