import React from "react"
import vk from "../img/vk.png"
import wp from "../img/whatsapp.png"
import tg from "../img/telegram.png"

class Footer  extends React.Component {
  render(){
    return(
        <footer className="footer">
            <div>
            <p>О нас</p>
            <p>Контакты</p>
            </div>

            <div>
            <p>Сообщить об ошибке</p>
            <p>Поддержка</p>
            </div>

            <div>
            <p>Реклама на сайте</p>
            <p><a href='https://vk.com/al_im.php?peers=c1_c4_140522778'><img className='socialicon' src={vk} alt="vk"/></a>
                <a href='https://web.whatsapp.com/'><img className='socialicon' src={wp} alt="wp"/></a>
                <a href='https://web.telegram.org/?legacy=1#/login'><img className='socialicon' src={tg} alt="tg"/></a></p>
            </div>
        </footer>
    )
  }
}

export default Footer