import "./ForOrganizations.scss";
import TitleAndSubtitle from "../TitleAndSubtitle";

function ForOrganizations() {
    return (
        <section className="forOrganizations">
            <TitleAndSubtitle
                title={"Образовательным организациям"}
                subtitle={"ПОМОГАеТ ВЫСТРОИТЬ ПОД НОГАМИ ПОДОПЕЧНЫХ фундамент из СвЕТЛОго будущего!"}
            />
            <div className="forOrganizations__items">
                <div className="forOrganizations__items-item">
                    <p className="forOrganizations__items-item-info">
                        <span className="forOrganizations__items-item-info-num">1</span>
                        Получите токен доступа
                    </p>
                </div>
                <div className="forOrganizations__items-item">
                    <p className="forOrganizations__items-item-info">
                        <span className="forOrganizations__items-item-info-num">2</span>
                        Организуйте тестирование
                    </p>
                </div>
                <div className="forOrganizations__items-item">
                    <p className="forOrganizations__items-item-info">
                        <span className="forOrganizations__items-item-info-num">3</span>
                        Узнайте результаты
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ForOrganizations;
