import "./UserAuth.scss";

const UserAuth = () => {
    return (
        <div className="userAuth">
            <form className="userAuth__form">
                <h1 className="userAuth__form-title">Заполните анкету</h1>
                <div className="userAuth__form-inputs">
                    <div>
                        <input type="text" placeholder="Фамилия"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Имя"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Отчество"/>
                    </div>
                    <div>
                        {/* <img src="/img/icons/email.svg" alt=""/> */}
                        <input type="email" placeholder="Электронная почта"/>
                    </div>
                    <div>
                        {/* <img src="/img/icons/key.svg" alt=""/> */}
                        <input type="text" placeholder="Токен"/>
                    </div>
                </div>
                <button className="userAuth__form-button">Подтвердить</button>
            </form>
        </div>
    );
};

export default UserAuth;
