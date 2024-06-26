import React from "react";
import Header from "../Header"
import Footer from "../Footer"
import AddUser from "../AddUser";

export const CreateQuestion = () =>{
    return(
        <div>
            
            <Header></Header>
            <h3 className="MainTextCreateQuestionPage">Задать вопрос </h3>
            <div className="CreateQuestionPage">
            <AddUser></AddUser>
            </div>
            <Footer></Footer>
        </div>

    )
}