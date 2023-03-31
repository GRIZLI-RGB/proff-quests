import "./Welcome.scss";

function Welcome() {

    return (
        <section className="welcome">
            <div className="welcome__info">
                <h1 className="welcome__info-title">
                    <span>— ПРОФ</span>QUESTS
                </h1>
                <p className="welcome__info-text">
                    Профориентация — это система мер, направленных на помощь в выборе профессии. В средних классах
                    подростки выбирают уже конкретные направления и специальности. Важно как можно раньше найти то, к
                    чему есть предрасположенность, и начать развивать эти навыки. Тогда шансы, что карьера будет
                    успешной и не придётся жалеть о своём выборе, сильно повышаются.
                </p>
                <button className="welcome__info-btn">Подробнее</button>
            </div>
            <img className="welcome__person" src="/img/welcome/person.svg" alt="Person" />
            <img className="welcome__decor" src="/img/decor/1.svg" alt="Decor" />
            <img className="welcome__arrowDown" src="/img/welcome/arrow-down.svg" alt="Arrow down"/>
        </section>
    );
}

export default Welcome;