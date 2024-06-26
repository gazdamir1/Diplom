import React from "react"
import {ProfilePage} from "../Components/Pages/ProfilePage"
import {CreateQuestion} from "../Components/Pages/CreateQuestion"
import {AboutUsPage} from "../Components/Pages/AboutUsPage"
import { MainPage } from "../Components/Pages/MainPage"
import { NewSubscribe } from "../Components/Pages/NewSubscribe"
import { EnterPage } from "../Components/Pages/EnterPage"
import { RegPage } from "../Components/Pages/RegPage"
import {AnswerPage} from "../Components/Pages/AnswerPage"

import {
    Routes,
    Route
  } from "react-router-dom";

export const RouteItems = () => {
    
    return(
    <Routes>
        <Route path="/profilepage" element={<ProfilePage />}/>
        <Route path="/createquestion" element={<CreateQuestion />}/>
        <Route path="/aboutuspage" element={<AboutUsPage />}/>
        <Route path="/" element={<MainPage />}/>
        <Route path="/newsubscribe" element={<NewSubscribe />}/>
        <Route path="/enterpage" element={<EnterPage />}/>
        <Route path="/regpage" element={<RegPage />}/>
        <Route path="/answerpage" element={<AnswerPage />}/>
    </Routes>
    )
}