import React from "react"
import {RouteItems} from './Routing/index'
import Items from "./Components/Items"
import Footer from "./Components/Footer"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair-grey.jpeg',
          desc: 'Lorem ipsum dolor sut amet, consectetur adipisicing',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.webp',
          desc: 'Lorem ipsum dolor sut amet, consectetur adipisicing',
          category: 'tables',
          price: '149.99'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpeg',
          desc: 'Lorem ipsum dolor sut amet, consectetur adipisicing',
          category: 'sofa',
          price: '549.99'
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'well-light.jpeg',
          desc: 'Lorem ipsum dolor sut amet, consectetur adipisicing',
          category: 'light',
          price: '25.00'
        }
      ]
    }
  }
  render() {
      return  (
      <div classname="wrapper">
        {/* <RouteItems/>  */}
      {/* <RouteItems />
      <Header></Header>
      <BodPic></BodPic>
      <QuestionBlock></QuestionBlock>
      <Footer></Footer> */}
    </div>
    )
  }

}

export default App