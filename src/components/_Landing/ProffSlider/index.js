import "./ProffSlider.scss";

function ProffSlider() {
    return (
        <div className="proffSlider">
            <div className="proffSlider__wrapper">
                <h6 className="proffSlider__title">
                    К вашему вниманию лишь часть наиболее распространенных профессий в мире:
                </h6>
                <div className="proffSlider__slider">
                    <div className="proffSlider__slider-item">
                        <h6 className="proffSlider__slider-item-title">Пожарный</h6>
                        <p className="proffSlider__slider-item-text">
                            Пожарный – важная, необходимая профессия, при которой приходится одновременно выполнять
                            функцию огнеборца, спасателя, медицинского работника. Ввиду специфики, такая деятельность
                            подходит не всем, потому что предполагает нагрузку не только физическую, но и
                            психологическую. Эта профессия лидирует в рейтинге специальностей, опасных для здоровья и
                            жизни. Чтобы работать пожарным, недостаточно располагать теоретическими знаниями. Для
                            спасения людей и их имущества, а также ради собственного выживания во время ликвидации
                            бедствия представителям этой профессии требуется постоянная тренировка, повышение
                            квалификации.
                        </p>
                        <div className="proffSlider__slider-item-img">
                            <img src="/img/slider/fireman.svg" alt="" />
                            <div className="proffSlider__slider-item-img-blur"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProffSlider;
