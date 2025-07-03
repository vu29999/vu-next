'use client';

import TitlePage from "../../../../components/TitlePage/TitlePage";
import menuData from "../../../../components/Header/MenuData";
import PDFViewer01 from "../../../../components/PDFViewer/PDFViewer";

const About01 = () => {

    return (
        <>

            <TitlePage menuData={menuData} />
            <div className="sub-content">
                <div className="content-box">
                    <div className="con-box no-pd">
                        <h4 className="h4-tit01">About 01</h4>
                        <PDFViewer01 fileUrl="/pdfs/test02.pdf" />
                    </div>
                </div>
            </div>

        </>
    );
};

export default About01;
