import TabMenu from "../../../../components/TabMenu/TabMenu";
import TabMenuMobi from "../../../../components/TabMenu/TabMenuMobi";
import TitlePage from "../../../../components/TitlePage/TitlePage";
import menuData from "../../../../components/Header/MenuData";


const TabMn01 = () => {

    return (
        <>
            <div className="tab-wrap">
                <div className="tab-box">
                    <TabMenu menuData={menuData} />
                    <TabMenuMobi menuData={menuData} />
                </div>
            </div>
            <TitlePage menuData={menuData} />
            <div className="sub-content">
                <div className="content-box">
                    <div className="con-box no-pd">
                        <h4 className="h4=tit01">TabMn01</h4>
                    </div>
                </div>
            </div>

        </>
    );
};

export default TabMn01;
