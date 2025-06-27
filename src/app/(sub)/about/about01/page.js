'use client';

import TitlePage from "../../../../components/TitlePage/TitlePage";
import menuData from "../../../../components/Header/MenuData";

const About01 = () => {

    return (
        <>

            <TitlePage menuData={menuData} />
            <div className="sub-content">
                <div className="content-box">
                    <div className="con-box no-pd">
                        <h4 className="h4-tit01">About 01</h4>
                    </div>
                </div>
            </div>

        </>
    );
};

export default About01;
