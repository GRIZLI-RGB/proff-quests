import { Toaster, toast } from "react-hot-toast";
import "./Checkpoint.scss";

const Checkpoint = ({ id, isCurrentStage, isUnlock, top, left }) => {
    return (
        <>
            <Toaster position="bottom-right" />
            <div
                onClick={() => {
                    if (isUnlock) {
                        window.location.href = "/quests/task/1";
                    } else {
                        toast.error("Уровень заблокирован");
                    }
                }}
                id={id}
                className="checkpoint"
                style={{
                    top,
                    left,
                }}>
                {isCurrentStage && <img className="checkpoint__marker" src="/img/quests/marker.svg" alt="Marker" />}
                {isUnlock ? (
                    <div className="checkpoint__body">1</div>
                ) : (
                    <img className="checkpoint__lock" src="/img/quests/lock.svg" alt="Lock stage" />
                )}
            </div>
        </>
    );
};

export default Checkpoint;
