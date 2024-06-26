import React from "react"

class Enter  extends React.Component {
  render(){
    return(
        <div className="Enter">
            <h3 className="EntPageMain">Вход</h3>
            <p>Логин</p>
            <input class="InpEntForm" type="text" name="name" />
            <p>Пароль</p>
            <input class="InpEntForm" type="text" name="name" />
            <h5><a href='/' className="ForgPas">Забыли пароль?</a></h5>
            <p><a  href='/enterpage'><button className='EntButton' type="button">Войти</button></a></p>
            <p><a  href='/regpage'><button className='EntButton' type="button">Регистрация</button></a></p>
        </div>
    )
  }
}

export default Enter