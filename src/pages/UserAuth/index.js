import { useState } from "react";
import "./UserAuth.scss";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

const UserAuth = () => {
    const [family, setFamily] = useState("");
    const [name, setName] = useState("");
    const [patr, setPatr] = useState("");
    const [email, setEmail] = useState("");
    const [key, setKey] = useState("");

    const userAuth = () => {
        if (family !== "" && name !== "" && patr !== "" && email !== "" && key !== "") {
            axios
                .post(
                    "https://study-0k3i.onrender.com/api/auth/reg",
                    {
                        family,
                        name,
                        patr,
                        email,
                        key,
                    },
                    {},
                )
                .then(response => {
                    toast.success("Вы успешно вошли!");
                    setTimeout(() => {
                        window.location.href = "/quests/map"
                    }, 1500)
                })
                .catch(err => {
                    toast.error("Не удалось зарегистрироваться");
                    console.log(err);
                });
        } else {
            toast.error("Заполните все поля");
        }
    };

    return (
        <>
            <Toaster position="bottom-right" />
            <div className="userAuth">
                <form className="userAuth__form">
                    <h1 className="userAuth__form-title">Заполните анкету</h1>
                    <div className="userAuth__form-inputs">
                        <div>
                            <input
                                type="text"
                                value={family}
                                onChange={e => setFamily(e.target.value)}
                                placeholder="Фамилия"
                            />
                        </div>
                        <div>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Имя" />
                        </div>
                        <div>
                            <input
                                type="text"
                                value={patr}
                                onChange={e => setPatr(e.target.value)}
                                placeholder="Отчество"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Электронная почта"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                value={key}
                                onChange={e => setKey(e.target.value)}
                                placeholder="Токен"
                                maxLength={16}
                            />
                        </div>
                    </div>
                    <div className="userAuth__form-button" onClick={userAuth}>
                        Подтвердить
                    </div>
                </form>
            </div>
        </>
    );
};

export default UserAuth;
