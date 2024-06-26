import React from "react"
import Users from "./Users"
import AddUser from "./AddUser"


class QuestionBlock  extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        users: [
            {
                id: 1,
                firstname: 'Bob',
                questiontype: 'Экшен',
                date: '21.11.22',
                bio: 'Вопрос',
                isHappy: true
            },
            {
                id: 2,
                firstname: 'John',
                questiontype: 'Аркада и ритм-игры',
                date: '15.05.21',
                bio: 'Вопрос',
                isHappy: false
            },
            {
              id: 3,
              firstname: 'Рикардо',
              questiontype: 'Слэшеры',
              date: '28.11.22',
              bio: 'U got that?',
              isHappy: false
          }
        ]
    }  
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
}

  render(){
    return(
            <div className="QuestionBlock"> 
      
      <aside>
        <AddUser onAdd={this.addUser}/>
      </aside>
      <main>
        <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser}/>
      </main>
      </div>
    )
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })
  }

  editUser(user){
    let allUsers = this.state.users
    allUsers[user.id - 1] = user

    this.setState({users: []}, () => {
        this.setState({users:[...allUsers]})
    })
  }

  addUser(user) {
    const id = this.state.users.length + 1
    this.setState({ users: [...this.state.users,  {id,...user}] })
  }

}

export default QuestionBlock