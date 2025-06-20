

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SubVisual from "../../components/SubVisual/SubVisual";
import PathNavigator from "../../components/PathNavigator/PathNavigator";
import menuData from "../../components/Header/MenuData";
import "../../css/Guide.css";
import "../../css/table.css";

export default function SubLayout({ children }) {
    return (
        <div className="wrap sub">
            <Header />
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
