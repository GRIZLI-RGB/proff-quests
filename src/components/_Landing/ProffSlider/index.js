import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "./ProffSlider.scss";

function ProffSlider() {
    return (
        <div className="proffSlider">
            <div className="proffSlider__wrapper">
                <h6 className="proffSlider__title">
                    К вашему вниманию лишь часть наиболее распространенных профессий в мире:
                </h6>
                <Swiper
                    className="proffSlider__slider"
                    loop={true}
                    spaceBetween={150}
                    navigation={true}
                    modules={[Navigation]}>
                    <SwiperSlide className="proffSlider__slider-item">
                        <h6 className="proffSlider__slider-item-title">Пожарный</h6>
                        <p className="proffSlider__slider-item-text">
                            Пожарный – важная, необходимая профессия, при которой приходится одновременно выполнять
                            функцию огнеборца, спасателя, медицинского работника. Ввиду специфики, такая деятельность
                            подходит не всем, потому что предполагает нагрузку не только физическую, но и
                            психологическую. Эта профессия лидирует в рейтинге специальностей, опасных для здоровья и
                            жизни. Чтобы работать пожарным, недостаточно располагать теоретическими знаниями.
                        </p>
                        <div className="proffSlider__slider-item-img">
                            <img src="/img/slider/fireman.svg" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="proffSlider__slider-item">
                        <h6 className="proffSlider__slider-item-title">Врач</h6>
                        <p className="proffSlider__slider-item-text">
                            Врач - это одна из профессий, без которой бы человечеству жилось очень плохо, можно даже
                            сказать, что некоторые люди, не получив должного лечения умерли бы намного быстрее. А
                            некоторые и вовсе не появились бы на свет, т.е. не родились. Сейчас медицина очень развитая
                            отрасль, врач должен постоянно совершенствовать свои навыки, саморазвиваться. Одна важная
                            особенность врачей - это индивидуальных подход к больному, только тогда такой специалист
                            будет полезен обществу и будет выполнять свой долг, лечить людей.
                        </p>
                        <div className="proffSlider__slider-item-img">
                            <img src="/img/slider/doctor.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="proffSlider__slider-item">
                        <h6 className="proffSlider__slider-item-title">Учитель</h6>
                        <p className="proffSlider__slider-item-text">
                            Учитель — очень важная и востребованная профессия. Он проводит занятия в соответствии с
                            образовательной программой, разрабатывает учебный план на четверть, год. Организует
                            самостоятельную работу учащихся, проводит контрольные и проверочные работы, проверяет
                            домашние задания. Педагог обучает и воспитывает детей и подростков с учетом их
                            психолого-физиологических особенностей и специфики преподаваемого предмета.
                        </p>
                        <div className="proffSlider__slider-item-img">
                            <img src="/img/slider/teacher.png" alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default ProffSlider;
