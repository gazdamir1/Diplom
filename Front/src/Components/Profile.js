import React from "react"
import ProfileImg from "../img/ProfileImg.jpg"
import QB2 from "../Components/QB2"

class Profile  extends React.Component {
  render(){
    return(
        <div>
            <div>
                <h3 className="MainTextCreateQuestionPage">Профиль</h3>
            </div>
            <div className="ProfileBlock">
                <p><img className="ProfImg" src={ProfileImg} alt="ProfileImg"/></p>
                <h2>Никнейм</h2>
                <a  href='/profilepage'><button className='hdbutton1' type="button">Редактировать</button></a>
                <a  href='/newsubscribe'><button className='hdbutton1' type="button">Подписка</button></a>
            </div>
            <div className="ProfileQuestions">
                <h3 className="MainTextCreateQuestionPage">История вопросов</h3>
                <QB2></QB2>
            </div>
        </div>
    )
  }
}

export default Profile