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
                bio: 'Вопрос',
                isHappy: true
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