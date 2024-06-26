import React from "react"

class AddUser  extends React.Component {
    userAdd = {}
    constructor(props){
        super(props)
        this.state = {
            firstname: "",
            date: "",
            questiontype: "",
            bio: "",
            age: 1,
            isHappy: false
        }
    }
  render(){
    return(
        <form ref={(el => this.myForm = el)}>
          <input placeholder="Имя пользователя" onChange={(e) => this.setState({firstname: e.target.value})}/>
          <textarea placeholder="Дата" onChange={(e) => this.setState({date: e.target.value})}></textarea>
          <textarea placeholder="Категории" onChange={(e) => this.setState({questiontype: e.target.value})}></textarea>
          <textarea placeholder="Вопрос" onChange={(e) => this.setState({bio: e.target.value})}></textarea>
          <label placeholder="isHappy">Ответ получен?</label>
          <input type="checkbox" id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked})}/>
          <button type="button" onClick={() => {
            this.myForm.reset()
            this.userAdd = {
                firstname:this.state.firstname,
                date:this.state.date,
                questiontype:this.state.questiontype,
                bio:this.state.bio,
                isHappy:this.state.isHappy,
            }
            if(this.props.user)
                this.userAdd.id = this.props.user.id
            this.props.onAdd (this.userAdd)
        }
        }>Добавить</button>
        </form>
    )
  }
}

export default AddUser