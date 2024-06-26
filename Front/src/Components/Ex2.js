import React from 'react';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__inner'>
            <div>
              <div className='footer__logo'/>
              <h4>NewGame. Все права защищены&copy;</h4>
            </div>
            <div className='column'>
              <h4>Контакты</h4>
              <h5>Ежедневно с 9:00 до 22:00<br/>г.Казань, ул.Тверская, дом.1</h5>
              <div className='footer__links'>
                <a href='https://vk.com/al_im.php?peers=c1_c4_140522778'><img className='social__icon' src='./icons/vk.png'/></a>
                <a href='https://web.whatsapp.com/'><img className='social__icon' src='./icons/whatsapp.png'/></a>
                <a href='https://web.telegram.org/?legacy=1#/login'><img className='social__icon' src='./icons/telegram.png'/></a>
              </div>
              <h5>+1(23)-45-67-890<br/><u>mail@new-game-site.ru</u></h5>
            </div>
        </div>
      </div>    
    </footer>
  )
}