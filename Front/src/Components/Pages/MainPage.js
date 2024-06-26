import React from "react"
import Header from "../Header"
import BodPic from "../BodPic"
import Footer from "../Footer"
import QuestionBlock from "../QuestionBlock"
import SelectMenu from "../SelectMenu"
import Product from '../Product';
import Items from "../Items"

export const MainPage = () =>{

  const product = {
    image: 'https://via.placeholder.com/250x250.png',
    name: 'Пример товара',
    features: [
      'Характеристика 1',
      'Характеристика 2',
      'Характеристика 3',
      'Характеристика 4',
    ],
    manufacturer: 'Производитель',
  };

    return(
        <div > 
      <Header></Header>
      <BodPic></BodPic>
      <Items></Items>
      <Product {...product} />
      <QuestionBlock></QuestionBlock>
      <SelectMenu></SelectMenu>
      <Footer></Footer>
    </div>

    )
}