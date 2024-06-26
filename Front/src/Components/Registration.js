import React from "react"

class Registration  extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }


    
}
  render(){
    return(
        <div className="Enter">
          <form onSubmit={(event) => {
            event.preventDefault();
            
            fetch('https://localhost:7219/api/Authenticate/register',{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: event.target.mail.value,
                username: event.target.login.value,
                password: event.target.password.value,
              }),
            }).then (()=>window.location.replace('https://google.com'))

          }}>
            <h3 className="EntPageMain">Регистрация</h3>
            <p>Введите электронную почту</p>
            <input class="InpEntForm" type="text" name="mail" />
            <p>Введите логин</p>
            <input class="InpEntForm" type="text" name="login" />
            <p>Введите пароль</p>
            <input class="InpEntForm" type="text" name="password" />
            <p><button className='EntButton' type="submit">Зарегистрироваться</button></p>
          </form>
        </div>
    )
  }
}

export default Registration