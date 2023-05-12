import { Card, CardHeader, Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function AppWebsiteVisits({ title, subheader }) {

    // Create organization
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [avatarUrl, setAvatarUrl] = useState("");
    const [endTime, setEndTime] = useState("");
    const [token, setToken] = useState("");

    const createOrganization = () => {
        axios
            .post("https://study-0k3i.onrender.com/api/admin/company", {
                name,
                description,
                token,
                avatarUrl,
                end_time: new Date(endTime),
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("adminToken")}`
                }
            }
            )
            .then(response => {
                toast.success("Организация создана");
                setName("");
                setDescription("");
                setAvatarUrl("");
                setEndTime("");
                setToken("");
            })
            .catch(err => {
                toast.error("Не удалось создать организацию");
            });
    };

    return (
        <>
            <Toaster position="bottom-right" />
            <Card>
                <CardHeader title={title} subheader={subheader} />

                <Box sx={{ p: 3 }} dir="ltr">
                    <form className="adminPanel__form">
                        <div className="adminPanel__form-box">
                            <input
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className="adminPanel__form-box-input"
                                type="text"
                                placeholder="Название организации"
                            />
                        </div>
                        <div className="adminPanel__form-box">
                            <input
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                className="adminPanel__form-box-input"
                                type="text"
                                placeholder="Описание организации"
                            />
                        </div>
                        <div className="adminPanel__form-box">
                            <input
                                value={avatarUrl}
                                onChange={e => setAvatarUrl(e.target.value)}
                                className="adminPanel__form-box-input"
                                type="text"
                                placeholder="URL-адрес аватара"
                            />
                        </div>
                        <div className="adminPanel__form-box">
                            <input
                                value={endTime}
                                onChange={e => setEndTime(e.target.value)}
                                className="adminPanel__form-box-input"
                                type="date"
                                placeholder="Дата окончания договора"
                            />
                        </div>
                        <div className="adminPanel__form-box">
                            <input
                                value={token}
                                onChange={e => setToken(e.target.value)}
                                className="adminPanel__form-box-input"
                                type="text"
                                placeholder="Токен доступа"
                            />
                        </div>
                        <div className="adminPanel__form-box">
                            <div className="adminPanel__form-box-btn" onClick={createOrganization}>
                                Создать
                            </div>
                        </div>
                    </form>
                </Box>
            </Card>
        </>
    );
}