
import MenuStyle01 from '../../../components/HeaderStyle/HeaderStyle01';
import Footer from '../../../components/Footer/Footer';
import SubVisual from "../../../components/SubVisual/SubVisual";
import PathNavigator from "../../../components/PathNavigator/PathNavigator";
import menuData from "../../../components/Header/MenuData";
import "../../../css/Guide.css";
import "../../../css/table.css";

export default function SubLayout({ children }) {
    return (
        <div className="wrap sub">
            <MenuStyle01 />
            <div className="sub-container">
                <SubVisual menuData={menuData} />
                <PathNavigator menuData={menuData} />
                <div className="content-wrap">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}
