import Clickable from "../components/Clickable"
import Error from "../components/Error";
import "./page.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom";


let School = () => {
    let [counter, setCounter] = useState(0);
    let [showModal, setShowModal] = useState(false);
    let navigate = useNavigate();

    let handleClick = () => {
        setCounter((clicks) => { return clicks + 1 });
        setShowModal(showModal => !showModal);
    };

    const handleClickCMake = () => {
        let path = `cmake`;
        navigate(path);
    }

    const handleClickNetworks = () => {
        let path = `networks`;
        navigate(path);
    }

    let normalMode = <div className="projects">
        <Clickable title="CMake"  onClickFun={handleClickCMake} />
        <Clickable title="Networks" onClickFun={handleClickNetworks} />
    </div>;

    let errorMode = <Error onClick={() => { setShowModal(false) }} counter={counter} />

    return (<>
        {!showModal && normalMode}
        {showModal && errorMode}
    </>)
};

export default School;