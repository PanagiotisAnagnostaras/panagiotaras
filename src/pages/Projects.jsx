import Clickable from "../components/Clickable"
import Error from "../components/Error";
import "./page.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

let Projects = () => {
  let [counter, setCounter] = useState(0);
  let [showModal, setShowModal] = useState(false);
  let navigate = useNavigate();

  let handleClickDefault = () => {
    setCounter((clicks) => { return clicks + 1 });
    setShowModal(showModal => !showModal);
  };

  const handleClickPendulum = () => {
    let path = `pendulum`;
    navigate(path);
  }

  let normalMode = <div className="projects">
    <Clickable title="For fun: Inverted Pendulum" onClickFun={handleClickPendulum} />
    <Clickable title="Academic: Master Thesis" onClickFun={handleClickDefault} />
    <Clickable title="Academic: Semester Project" onClickFun={handleClickDefault} />
    <Clickable title="Academic: Diploma Thesis" onClickFun={handleClickDefault} />
  </div>;

  let errorMode = <Error onClick={() => { setShowModal(false) }} counter={counter} />

  return (<>
    {!showModal && normalMode}
    {showModal && errorMode}
  </>)
};

export default Projects;