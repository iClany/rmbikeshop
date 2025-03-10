import React from 'react'
import '../index.css'
import Accordion from './mobileComponents/accordionMobile/Accordion';

export default function Footer() {
  const accordionData = [
    {
      title: 'Section 1',
      content: 'Content for section 1',
    },
    {
      title: 'Section 2',
      content: 'Content for section 2',
    },
    {
      title: 'Section 3',
      content: 'Content for section 3',
    },
  ];

  return (
    <footer>
      <div className='topFooter'>
        <div className='mobileAccordion'>
          <Accordion items={accordionData} />
        </div>
          <div className='ulFooter'>
            <div className='firstColumn'>
              <label className='columnLabel'>Компания</label>
                <ul className='firstCol'>
                  <li className='columnBtn'><a href='/worktime'>Время работы</a></li>
                  <li className='columnBtn'><a href='/shopaddress'>Адрес магазина</a></li>
                  <li className='columnBtn'><a href='/service'>Услуги мастерской</a></li>
                  <li className='columnBtn'><a href='/publicoffer'>Договор публичной оферты</a></li>
                  <li className='columnBtn'><a href='/privacy'>Конфиденциальность</a></li>
                </ul>
            </div>
            <div className='twoColumn'>
              <label className='columnLabel'>Для покупателей</label>
                <ul className='twoCol'>
                  <li className='columnBtn'><a href='/shipping'>Условия доставки</a></li>
                  <li className='columnBtn'><a href='/payments'>Оплата и рассрочка</a></li>
                  <li className='columnBtn'><a href='/terms'>Пользовательское соглашение</a></li>
                  <li className='columnBtn'><a href='/warranty'>Обслуживание и гарантия</a></li>
                  <li className='columnBtn'><a href='/return'>Возврат и обмен</a></li>
                </ul>
            </div>
            <div className='thridColumn'>
              <label className='columnLabel'>Каталог</label>
                <ul className='thridCol'>
                  <li className='columnBtn'><a href='/catalog/bycicle'>Велосипеды</a></li>
                  <li className='columnBtn'><a href='/catalog/parts'>Запчасти</a></li>
                  <li className='columnBtn'><a href='/catalog/protection'>Защита</a></li>
                  <li className='columnBtn'><a href='/catalog/accessories'>Аксессуары</a></li>
                </ul>
            </div>
        </div>
        <div className='bottomFooter'>
            <span className='textFooter'>2024 &copy; RMBike.by - Веломагазин. Все права защищены. <br/></span>
            <span className='textFooter'>Индивидуальный предприниматель Малахов Роман Вячеславович, УНП 491644446<br/>Регистрация - Республика Беларусь от 19 февраля 2024 года. Администрация Центрального района г.Гомеля</span>
            <img className='paymentsInfo' alt='Платежная информация' src='/img/paynaments-info.svg'></img>
        </div>
      </div>
    </footer>
  )
}
