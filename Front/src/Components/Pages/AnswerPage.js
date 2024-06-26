import React from "react";
import Header from "../Header"
import Footer from "../Footer"
import QBInQuestion from "../QBInQuestion";

export const AnswerPage = () =>{
    return(
        <div className="QBlockInAnswer">
            <Header></Header>
            <h3 className="MainTextCreateQuestionPage">Вопрос </h3>
            <div className="CreateQuestionPage">
            <div className="QBInQuestionStyle">
            <QBInQuestion></QBInQuestion>
            </div>
            </div>
            <Footer></Footer>
        </div>

    )
}