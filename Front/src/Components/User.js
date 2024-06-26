import React from "react"
import AddUser from "./AddUser"
import { IoCloseCircle, IoHammerSharp } from 'react-icons/io5'

class User  extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      editForm: false
    }
  }
    user = this.props.user
    render(){
    return(
        <div className="user"> 
        
                <IoCloseCircle onClick={() => this.props.onDelete(this.user.id)} className="delete-icon"/>
                <IoHammerSharp onClick={() => {
                  this.setState({
                    editForm: !this.state.editForm
                  })
                }} className="edit-icon"/>
                {/* <a href="/answerpage"> */}
                <h3>{this.user.firstname}</h3>
                <p>{this.user.date}</p>
                <p>{this.user.questiontype}</p>
                <p>{this.user.bio}</p>
                <b>{this.user.isHappy ? 'Ответ получен' : 'Ответ не получен'}</b>
                {/* </a> */}
                {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit}/>}
            </div>

    )
  }
}

export default User