import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import CreateRoomAlone from '../modal/CreateRoomAlone';
import LoginCheckModal from '../modal/LoginCheckModal';

function Mainbody() {
    const [openModal, setOpenModal] = useState(false);
    const Authorization = sessionStorage.getItem('Authorization');

    function handleClick() {
        window.location.replace("/training/others/lobby")
    }

    return (
        <div className="main-wrapper">
            <div className="main-page-body">
                <div className="body-phrase1"> ㅌㅋㅌㅂ </div>
                <div className="body-phrase2">TECHTERVIEW에서 실제 면접을 보는 듯한 긴장감을 느끼세요! </div>
            </div>
            <div className='main-page-enter-btn'>

            {Authorization ?
                <div className='main-image-button-container'>
                <img className="alone-btn-img" onClick={() => { setOpenModal(true); }}src={require("../images/alonebutton.png")} alt={"혼자하기"} />
                <img className="main-photo" src={require("../images/main-image.png")} alt={"studying man"} />
                {/* <Link to="/training/others/lobby"> */}
                    <img className="together-btn-img" onClick={() => { handleClick(); }}  src={require("../images/togetherbutton.png")} alt={"함꼐하기"} />
                {/* </Link> */}
                {openModal && <CreateRoomAlone closeModal={setOpenModal} />}
                </div>
                    :
                    <div className='main-image-button-container'>
                    <img className="alone-btn-img" onClick={() => { setOpenModal(true); }}src={require("../images/alonebutton.png")} alt={"혼자하기"} />
                    <img className="main-photo" src={require("../images/main-image.png")} alt={"studying man"} />
                    <img className="together-btn-img" onClick={() => {  }}  src={require("../images/togetherbutton.png")} alt={"함꼐하기"} />
                    {openModal && <LoginCheckModal closeModal={setOpenModal} />}

                </div>
                }
        </div>       
     </div>
    )
            }

export default Mainbody
