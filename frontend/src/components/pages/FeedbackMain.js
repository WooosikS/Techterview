import React, { Component, useEffect, useState } from 'react';
import FeedbackMenu from "../includes/FeedbackMenubar"
// import { Link } from 'react-router-dom';
import api from "../shared/api";
import '../css/FeedBack.css'

function Feedback() {
    const [MainLengthCheck, SetMainLengthCheck] = useState("");
    const [SelectFeedPath, SetSelectFeedPath] = useState("");
    const [FeedArray, SetFeedArray] = useState([]);
    useEffect(() => {
        async function getFeedback() {
            await api.get('/api/feedback/getMain')
                .then(res => {
                    SetMainLengthCheck((res.data).length)
                    SetFeedArray(res.data)
                });
        }
        getFeedback();
    }, []);

    const YMDFormat = (num) => {
        if (!num) return "";
        let firstNum = num.slice(0, 10);
        let secondNum = num.slice(11, 16);
        return firstNum + " " + secondNum
    }

    const selectFeedMenu = (path) => {
        SetSelectFeedPath(path);
        getCategoryFeed(path);
    }

    const getCategoryFeed = async (path) => {
        await api.get(`/api/feedback/category${path}`)
            .then(res => {
                console.log(res.data);
                SetMainLengthCheck((res.data).length)
                SetFeedArray(res.data)
            })
    }

    return (
        <div className='Wrapper'>
            <div className="others-lobby-header2" >
                <FeedbackMenu  selectFeedMenu={(id) => selectFeedMenu(id)}/>
            </div>
            {MainLengthCheck ?
            <div className="Main-body">
                <div className='feedback-table'>
                    <table>
                        <thead>
                            <tr>
                                <th>순위</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>좋아요 수</th>
                                <th>댓글 수</th>
                                <th>등록일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {FeedArray.map((value, idx) => {
                                return (
                                    <tr>
                                        <td> {idx + 1} </td>
                                        <a href={`/feedback/detail/${value.id}`}><td> {value.feedback_title} </td></a>
                                        <td> {value.user_name} </td>
                                        <td> {value.like_cnt} </td>
                                        <td> {value.reply_cnt} </td>
                                        <td> {YMDFormat(value.createdAt)} </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>:"아무것도 없어염 ~><"}
        </div >
    )
}

export default Feedback;