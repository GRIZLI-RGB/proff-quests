import TitleAndSubtitle from "../TitleAndSubtitle";
import "./AboutProject.scss";

function AboutProject() {
    return (
        <section className="aboutProject">
            <TitleAndSubtitle title={"О проекте"} subtitle={"Помогаем наметить верный курс на будущее!"} />
            <div className="aboutProject__items">
                <div className="aboutProject__items-item">
                    <div className="aboutProject__items-item-img">
                        <img src="/img/aboutProject/interactive.svg" alt="" />
                    </div>
                    <h6 className="aboutProject__items-item-title">Интерактивно</h6>
                    <p className="aboutProject__items-item-text">
                        Говорим «Нет!» скучным тестам и даём возможность узнать свою профессиональную
                        предрасположенность в игровой манере
                    </p>
                </div>
                <div className="aboutProject__items-item">
                    <div className="aboutProject__items-item-img">
                        <img src="/img/aboutProject/professional.svg" alt="" />
                    </div>
                    <h6 className="aboutProject__items-item-title">Профессионально</h6>
                    <p className="aboutProject__items-item-text">
                        Все результаты основаны на исследованиях профессиональных практикующих специалистов в области
                        профориентации, выводы формируются при оценке большого количества факторов
                    </p>
                </div>
                <div className="aboutProject__items-item">
                    <div className="aboutProject__items-item-img">
                        <img src="/img/aboutProject/fast.svg" alt="" />
                    </div>
                    <h6 className="aboutProject__items-item-title">Быстро</h6>
                    <p className="aboutProject__items-item-text">
                        Прошли квест — сразу получили закономерный результат! Нет необходимости ждать их обработки, ведь
                        система выполняет анализ полученных данных в полностью автоматическом режиме
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;
