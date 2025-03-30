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

  const handleClickRLGarage = () => {
    let path = `rlgarage`;
    navigate(path);
  }

  const handleClickSandbox = () => {
    let path = `sandbox`;
    navigate(path);
  }

  const handleClickMasterThesis = () => {
    let path = `masterthesis`;
    navigate(path);
  }

  const handleClickSemesterProject = () => {
    let path = `semesterproject`;
    navigate(path);
  }

  let normalMode = <div className="projects">
    <Clickable title="RL Garage (ongoing for fun)" onClickFun={handleClickRLGarage} />
    <Clickable title="Sandbox (ongoing for fun)" onClickFun={handleClickSandbox} />
    <Clickable title="Master Thesis (academic)" onClickFun={handleClickMasterThesis} />
    <Clickable title="Semester Project (academic)" onClickFun={handleClickSemesterProject} />
  </div>;

  let errorMode = <Error onClick={() => { setShowModal(false) }} counter={counter} />

  return (<>
    {!showModal && normalMode}
    {showModal && errorMode}
  </>)
};

export default Projects;