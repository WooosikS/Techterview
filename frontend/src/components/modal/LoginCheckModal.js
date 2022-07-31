import React, { useEffect, useState, useRef } from 'react';
import '../css/TrainingAloneStartModal.css';

function LoginCheckModal() {

    function getLoginURL() {
        window.location.href = '/login'
    }
    function goToHome() {
        window.location.href = '/'
    }

    return (
        <div>
            <div className='login-modal' id='login-modal'>
                <div className='login-modal-content'>
                    <div className='login-modal-body'>
                        로그인 후 서비스를 이용해 주세요🧑🏻‍💻
                    </div>
                    <div className='training-alone-start-modal-footer'>
                        <button className='btn-yes' onClick={() => { getLoginURL() }} > 로그인 하러가기</button>
                        <button className='btn-yes' onClick={() => { goToHome() }} > 홈으로 돌아가기</button>
                    </div >
                </div>
            </div>
        </div >
    );
}
export default LoginCheckModal;