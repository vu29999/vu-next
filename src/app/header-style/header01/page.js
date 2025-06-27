
import TitlePage from "../../../components/TitlePage/TitlePage";
import menuData from "../../../components/Header/MenuData";

const Header01 = () => {
    return (
        <>

            <TitlePage menuData={menuData} />
            <div className="sub-content">
                <div className="content-box">
                    <div className="con-box no-pd">
                        <h4 className="h4-tit01">Header Style 01</h4>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Header01;