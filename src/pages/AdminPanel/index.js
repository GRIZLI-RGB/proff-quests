import { useEffect, useState } from "react";
import "./AdminPanel.scss";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const AdminPanel = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (localStorage.getItem("adminToken")) {
            window.location.href = "/admin-panel";
        }
    }, []);

    const goAuth = () => {
        if (login === "" || password === "") {
            if (login === "") {
                toast.error("Введите логин");
            }
            if (password === "") {
                toast.error("Введите пароль");
            }
        } else {
            axios
                .post("https://study-0k3i.onrender.com/api/auth/login", {
                    login,
                    password,
                })
                .then(response => {
                    if (response.status === 200) {
                        localStorage.setItem("adminToken", response.data.token);
                        toast.success("Вход прошел успешно");
                        setTimeout(() => {
                            window.location.href = "/admin-panel"
                        }, 1500);
                    }
                })
                .catch(err => {
                    toast.error("Неверные данные для входа");
                });
        }
    };

    return (
        <>
            <Toaster position="bottom-right" />
            <div className="userAuth">
                <form className="userAuth__form">
                    <h1 className="userAuth__form-title">Вход в админку</h1>
                    <div className="userAuth__form-inputs">
                        <div>
                            <input
                                type="text"
                                placeholder="Логин"
                                value={login}
                                onChange={e => setLogin(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                j
                                placeholder="Пароль"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="userAuth__form-button" onClick={goAuth}>
                        Войти
                    </div>
                </form>
            </div>
        </>
    );
};

export default AdminPanel;
