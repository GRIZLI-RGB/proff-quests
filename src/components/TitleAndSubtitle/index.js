import styles from "./TitleAndSubtitle.module.scss";

function TitleAndSubtitle({ title = "title", subtitle = "subtitle" }) {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.line}></div>
            <h6 className={styles.subtitle}>{subtitle}</h6>
        </div>
    );
}

export default TitleAndSubtitle;
