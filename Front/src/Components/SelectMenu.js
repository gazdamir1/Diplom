import React from "react"

class SelectMenu  extends React.Component {
  render(){
    return(
        <div className="SelectMenu">
            {this.props.title}
            <h3><div className='MainText'>Категории</div></h3>
            <nav>
              <p><button className='SelectMenuButton' type="button">Экшен</button></p>
              <p><button className='SelectMenuButton' type="button">Shoot 'em up</button></p>
              <p><button className='SelectMenuButton' type="button">Аркада и ритм-игра</button></p>
              <p><button className='SelectMenuButton' type="button">Платформер и раннер</button></p>
              <p><button className='SelectMenuButton' type="button">Слэшеры</button></p>
              <p><button className='SelectMenuButton' type="button">Файтинги и боевые искусства</button></p>
              <p><button className='SelectMenuButton' type="button">Шутер от первого лица</button></p>
              <p><button className='SelectMenuButton' type="button">Шутер от третьего лица</button></p>
              <p><button className='SelectMenuButton' type="button">Приключенческая игра</button></p>
              <p><button className='SelectMenuButton' type="button">Визуальная новелла</button></p>
            </nav>
        </div>
    )
  }
}

export default SelectMenu