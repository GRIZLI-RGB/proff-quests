import { useEffect, useState } from "react";
import "./Banner.scss";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Reorder } from "framer-motion";

function Banner() {
    const [stage, setStage] = useState("0 этап");
    const [toggle, setToggle] = useState(true);

    const [secondStageElements, setSecondsStageElements] = useState([
        "ball",
        "microscope",
        "syringe",
        "notebook",
        "book"
    ]);

    const [colors, setColors] = useState([])

    const [items, setItems] = useState([])

    const [results, setResults] = useState([
        "Ваш психотип склонен к незаурядным, порой необоснованным, но зачастую довольно удачным решениям. Рекомендуем больше уделять внимание развитию долгосрочного мышления.",
        "Вы не боитесь принимать тяжелые решения и зачастую ваш выбор оказывается верным, но рекомендуем не спешить — сперва подумайте, а потом делайте.",
        "Ни одна проблема не доставляет вам в жизни особых хлопот. Вы легко и безукоризненно проходите все препятствия на своем жизненном пути, не сбиваясь с намеченном курса.",
    ])

    useEffect(() => {
        if (!toggle) {
            setToggle(true);
        }
    }, [toggle, setToggle]);

    return (
        <div className="banner">
            <div className="banner__wrapper">
                {stage === "0 этап" && (
                    <SwitchTransition mode="out-in">
                        <CSSTransition
                            key={toggle}
                            timeout={250}
                            classNames="fade"
                            onExited={() => setStage("1 этап")}
                            unmountOnExit>
                            <div className="banner__stage-0">
                                <p className="banner__stage-0-text">
                                    Попробуйте пройти экспресс-тестирование уже сейчас и посмотрите насколько это
                                    интересно и полезно!
                                </p>
                                <button className="banner__stage-0-btn" onClick={() => setToggle(!toggle)}>
                                    НАЧАТЬ
                                </button>
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                )}
                {stage === "1 этап" && (
                    <SwitchTransition mode="out-in">
                        <CSSTransition
                            key={toggle}
                            timeout={250}
                            classNames="fade"
                            onExited={() => setStage("2 этап")}
                            unmountOnExit>
                            <div className="banner__stage-0">
                                <p className="banner__stage-0-text">
                                    К результатам быстрого тестирования не стоит относиться серьезно — это, скорее,
                                    способ познакомить вас с системой в целом. Поэтому не расстаривайтесь, если ответ,
                                    выданной нашей системой, вам не понравится.
                                </p>
                                <button className="banner__stage-0-btn" onClick={() => setToggle(!toggle)}>
                                    Понятно
                                </button>
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                )}
                {stage === "2 этап" && (
                    <SwitchTransition mode="out-in">
                        <CSSTransition
                            key={toggle}
                            timeout={250}
                            classNames="fade"
                            onExited={() => setStage("3 этап")}
                            unmountOnExit>
                            <div className="banner__stage-2">
                                <h6 className="banner__stage-title">1. Предметы на столе</h6>
                                <p className="banner__stage-text">
                                    Вы находитесь в светлом уютном помещении. Перед вами стоит деревянный стол, на
                                    котором в хаотичном порядке расположено пять разных предметов. Опираясь на
                                    внутренние ощущения, расположите их в том порядке, в котором, как вам кажется, они
                                    будут выглядеть наиболее естественно.
                                </p>
                                
                                    <Reorder.Group
                                        className="banner__stage-2-items"
                                        values={secondStageElements}
                                        onReorder={setSecondsStageElements}
                                        axis="x">
                                        {secondStageElements.map(item => (
                                            <Reorder.Item key={item} value={item}>
                                                <div className="banner__stage-2-items-item" >
                                                    <img src={`/img/banner/${item}.png`} alt=""/>
                                                </div>
                                            </Reorder.Item>
                                        )
                                        )}
                                    </Reorder.Group>
                                <button className="banner__stage-btn" onClick={() => setToggle(!toggle)}>
                                    Далее
                                </button>
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                )}
                {stage === "3 этап" && (
                    <SwitchTransition mode="out-in">
                        <CSSTransition
                            key={toggle}
                            timeout={250}
                            classNames="fade"
                            onExited={() => setStage("4 этап")}
                            unmountOnExit>
                            <div className="banner__stage-2">
                                <h6 className="banner__stage-title">2. Любимые цвета</h6>
                                <p className="banner__stage-text">
                                    Цвета являются основой человеческого зрения. Многие популярные тесты для определения типов личности, темперамента, выделения определенных черт характера строятся именно на цветовых предпочтениях. Вот и мы предлагаем вам сделать это. Выберите три наиболее симпатизирующих вам цвета.
                                </p>
                                <div className="banner__stage-2-items">
                                    <div id="color-1" className="banner__stage-2-items-item banner__stage-2-items-item--color" style={{backgroundColor: "red"}} onClick={() => {
                                        if (colors.length < 3) {
                                            document.getElementById("color-1").style.filter = "brightness(15%)"
                                            setColors([...colors, true])
                                        }
                                    }}>

                                    </div>
                                    <div id="color-2" className="banner__stage-2-items-item banner__stage-2-items-item--color" style={{backgroundColor: "green"}} onClick={() => {
                                        if (colors.length < 3) {
                                            document.getElementById("color-2").style.filter = "brightness(15%)"
                                            setColors([...colors, true])
                                        }
                                    }}>
                                    
                                    </div>
                                    <div id="color-3" className="banner__stage-2-items-item banner__stage-2-items-item--color" style={{backgroundColor: "orange"}} onClick={() => {
                                        if (colors.length < 3) {
                                            document.getElementById("color-3").style.filter = "brightness(15%)"
                                            setColors([...colors, true])
                                        }
                                    }}>
                                    
                                    </div>
                                    <div id="color-4" className="banner__stage-2-items-item banner__stage-2-items-item--color" style={{backgroundColor: "blue"}} onClick={() => {
                                        if (colors.length < 3) {
                                            document.getElementById("color-4").style.filter = "brightness(15%)"
                                            setColors([...colors, true])
                                        }
                                    }}>
                                    
                                    </div>
                                    <div id="color-5" className="banner__stage-2-items-item banner__stage-2-items-item--color" style={{backgroundColor: "purple"}} onClick={() => {
                                        if (colors.length < 3) {
                                            document.getElementById("color-5").style.filter = "brightness(15%)"
                                            setColors([...colors, true])
                                        }
                                    }}>
                                    
                                    </div>
                                </div>
                                <button className="banner__stage-btn" onClick={() => setToggle(!toggle)}>
                                    Далее
                                </button>
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                )}
                {stage === "4 этап" && (
                    <SwitchTransition mode="out-in">
                        <CSSTransition
                            key={toggle}
                            timeout={250}
                            classNames="fade"
                            onExited={() => setStage("5 этап")}
                            unmountOnExit>
                            <div className="banner__stage-2">
                                <h6 className="banner__stage-title">3. Необитаемый остров</h6>
                                <p className="banner__stage-text">
                                    Представьте, что вас волею судьбы выбросило на необитаемый остров. Перед вами появляется джин и предлагает выбрать три предмета, которые могут быть полезны при выживании. Что вы выберете?
                                </p>
                                <div className="banner__stage-2-items">
                                    <div className="banner__stage-2-items-item"  id="item-1" onClick={() => {
                                        if (items.length < 3) {
                                            document.getElementById("item-1").style.filter = "brightness(15%)"
                                            setItems([...items, true])
                                        }
                                    }}>
                                        <img src={`/img/banner/axe.png`} alt=""/>
                                    </div>
                                    <div className="banner__stage-2-items-item" id="item-2" onClick={() => {
                                        if (items.length < 3) {
                                            document.getElementById("item-2").style.filter = "brightness(15%)"
                                            setItems([...items, true])
                                        }
                                    }}>
                                                    <img src={`/img/banner/spich.png`} alt=""/>
                                    </div>
                                    <div className="banner__stage-2-items-item" id="item-3" onClick={() => {
                                        if (items.length < 3) {
                                            document.getElementById("item-3").style.filter = "brightness(15%)"
                                            setItems([...items, true])
                                        }
                                    }}>
                                                    <img src={`/img/banner/books.png`} alt=""/>
                                    </div>
                                    <div className="banner__stage-2-items-item" id="item-4" onClick={() => {
                                        if (items.length < 3) {
                                            document.getElementById("item-4").style.filter = "brightness(15%)"
                                            setItems([...items, true])
                                        }
                                    }}>
                                                    <img src={`/img/banner/health.png`} alt=""/>
                                    </div>
                                    <div className="banner__stage-2-items-item" id="item-5" onClick={() => {
                                        if (items.length < 3) {
                                            document.getElementById("item-5").style.filter = "brightness(15%)"
                                            setItems([...items, true])
                                        }
                                    }}>
                                                    <img src={`/img/banner/gaz.png`} alt=""/>
                                    </div>
                                </div>
                                <button className="banner__stage-btn" onClick={() => setToggle(!toggle)}>
                                    Далее
                                </button>
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                )}
                {stage === "5 этап" && (
                    <SwitchTransition mode="out-in">
                        <CSSTransition
                            key={toggle}
                            timeout={250}
                            classNames="fade"
                            unmountOnExit>
                            <div className="banner__stage-2">
                                <h6 className="banner__stage-title">Советы и рекомендации</h6>
                                <p className="banner__stage-text">
                                    {
                                        results[Math.floor(Math.random() * results.length)]
                                    }
                                </p>
                                <button className="banner__stage-btn" onClick={() => window.location.href = "/user-auth"}>
                                    Перейти к тестам
                                </button>
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                )}
            </div>
        </div>
    );
}

export default Banner;
