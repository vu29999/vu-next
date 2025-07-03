'use client';

import TitlePage from "../../../../components/TitlePage/TitlePage";
import menuData from "../../../../components/Header/MenuData";
import PDFViewer02 from "../../../../components/PDFViewer/PDFViewer02";

const About02 = () => {

    return (
        <>

            <TitlePage menuData={menuData} />
            <div className="sub-content">
                <div className="content-box">
                    <div className="con-box no-pd">
                        <h4 className="h4-tit01">About 02</h4>
                        <PDFViewer02 fileUrl="/pdfs/test02.pdf" />
                    </div>
                </div>
            </div>

        </>
    );
};

export default About02;
