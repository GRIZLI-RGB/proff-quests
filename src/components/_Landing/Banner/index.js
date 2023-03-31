import "./Banner.scss";

function Banner() {
    return (
        <div className="banner">
            <p className="banner__text">
                Попробуйте пройти экспресс-тестирование уже сейчас и посмотрите насколько это интересно и полезно!
            </p>
            <button className="banner__btn">НАЧАТЬ</button>
        </div>
    );
}

export default Banner;
