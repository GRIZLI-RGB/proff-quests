import { useEffect, useState } from "react";
import "./Banner.scss";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function Banner() {
    const [stage, setStage] = useState("0 этап");
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        if (!toggle) {
            setToggle(true);
        }
    }, [toggle, setToggle])

    return (
        <div className="banner">
            <div className="banner__wrapper">
                {
                    stage === "0 этап" && (
                        <SwitchTransition mode="out-in">
                            <CSSTransition key={toggle} timeout={250} classNames="fade" onExited={() => setStage("1 этап")} unmountOnExit>
                            <div className="banner__stage-0">
                                <p className="banner__stage-0-text">
                                    Попробуйте пройти экспресс-тестирование уже сейчас и посмотрите насколько это интересно и
                                    полезно!
                                </p>
                                <button className="banner__stage-0-btn" onClick={() => setToggle(!toggle)}>
                                    НАЧАТЬ
                                </button>
                            </div>
                            </CSSTransition>
                        </SwitchTransition>
                    )
                }
                {
                    stage === "1 этап" && (
                        <SwitchTransition mode="out-in">
                            <CSSTransition key={toggle} timeout={250} classNames="fade" onExited={() => setStage("2 этап")} unmountOnExit>
                            <div className="banner__stage-0">
                                <p className="banner__stage-0-text">
                                    К результатам быстрого тестирования не стоит относиться серьезно — это, скорее, способ
                                    познакомить вас с системой в целом. Поэтому не расстаривайтесь, если ответ, выданной нашей
                                    системой, вам не понравится.
                                </p>
                                <button className="banner__stage-0-btn" onClick={() => setToggle(!toggle)}>
                                    Понятно
                                </button>
                            </div>
                            </CSSTransition>
                        </SwitchTransition>
                    )
                }
                {
                    stage === "2 этап" && (
                        <SwitchTransition mode="out-in">
                            <CSSTransition key={toggle} timeout={250} classNames="fade" onExited={() => setStage("3 этап")} unmountOnExit>
                            <div className="banner__stage-2">
                                <h6 className="banner__stage-title">1. Предметы на столе</h6>
                                <p className="banner__stage-text">
                                    Вы находитесь в светлом уютном помещении. Перед вами стоит деревянный стол, на котором в хаотичном порядке расположено пять разных предметов. Опираясь на внутренние ощущения, расположите их в том порядке, в котором, как вам кажется, они будут выглядеть наиболее естественно.
                                </p>
                                <div className="banner__stage-2-items">
                                    <div className="banner__stage-2-items-item">
                                        <img src="/img/banner/ball.png" alt=""/>
                                    </div>
                                    <div className="banner__stage-2-items-item">
                                        <img src="/img/banner/microscope.png" alt=""/>
                                    </div>
                                    <div className="banner__stage-2-items-item">
                                        <img src="/img/banner/syringe.png" alt=""/>
                                    </div>
                                    <div className="banner__stage-2-items-item">
                                        <img src="/img/banner/notebook.png" alt=""/>
                                    </div>
                                    <div className="banner__stage-2-items-item">
                                        <img src="/img/banner/book.png" alt=""/>
                                    </div>
                                </div>
                                <button className="banner__stage-btn" onClick={() => setToggle(!toggle)}>
                                    Далее
                                </button>
                            </div>
                            </CSSTransition>
                        </SwitchTransition>
                    )
                }
            </div>
        </div>
    );
}

export default Banner;
