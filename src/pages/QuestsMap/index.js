import Xarrow, { Xwrapper } from "react-xarrows";
import Checkpoint from "./Checkpoint";
import "./QuestsMap.scss";

export const QuestsMap = () => {
    return (
        <div className="questsMap">
            <div>
                <div class="questsMap__content">
                    <img className="questsMap__content-map" src="/img/quests/map.png" alt="Map" />
                    <Checkpoint id="checkpoint-1" isCurrentStage isUnlock top="64%" left="28%" />
                    <Checkpoint id="checkpoint-2" top="52%" left="42%" />
                    <Checkpoint id="checkpoint-3" top="61%" left="56%" />
                    <Checkpoint id="checkpoint-4" top="44%" left="59%" />
                    <Xwrapper>
                        <Xarrow
                            start={"checkpoint-1"}
                            end={"checkpoint-2"}
                            showHead={false}
                            strokeWidth="9"
                            dashness
                            curveness="0.6"
                            lineColor="#CBAF64"
                        />
                        <Xarrow
                            start={"checkpoint-2"}
                            end={"checkpoint-3"}
                            showHead={false}
                            strokeWidth="9"
                            dashness
                            curveness="0.6"
                            lineColor="#CBAF64"
                        />
                        <Xarrow
                            start={"checkpoint-3"}
                            end={"checkpoint-4"}
                            showHead={false}
                            strokeWidth="9"
                            dashness
                            curveness="0.6"
                            lineColor="#CBAF64"
                        />
                    </Xwrapper>
                </div>
            </div>
        </div>
    );
};
