import React from "react"
import Users from "./Users"


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
          }
      ]
    }  
}

render(){
    return(
            <div className="QuestionBlock"> 

      <main>
        <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser}/>
      </main>
      </div>
    )
  }
}

export default QuestionBlock