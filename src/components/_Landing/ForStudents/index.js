import TitleAndSubtitle from "../TitleAndSubtitle";
import "./ForStudents.scss";

function ForStudents() {
    return (
        <section className="forStudents" id="for-students">
            <TitleAndSubtitle title={"Обучающимся"} subtitle={"Даем ценные професиональные рекомендации!"} />
            <p className="forStudents__text">
                Взрослая жизнь — может пугать. Одним из серьезнейших страхов становится{" "}
                <span>неопределенность перед будущим</span>. Кажется, что неправильный выбор — путь к саморазрушению.
                Отчасти это так и работает. Мы <span>поможем вам сделать верный выбор</span>, чтобы не беспокоиться о
                завтрашнем дне!
                <br />
                <br />К слову, в мире насчитывается <span>более 50 тысяч различных профессией и специальностей</span>.
                Ежегодно к этому числу прибавляется около 500 новых направлений.
            </p>
        </section>
    );
}

export default ForStudents;
