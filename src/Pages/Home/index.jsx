import React from "react"
import cls from '../../Styles/Pages/Home.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
// import { Navigation } from "swiper"

const slidesItems = [
   {
      id: 1,
      text: 'Долго, дорого, богато!',
      buttonText: 'каталог изделий',
      img: '/imgs/bgc.png'
   },
   {
      id: 2,
      text: 'Закажите сейчас и получите скидку 20%',
      buttonText: 'оформить заказ',
      img: '/imgs/bgc3.avif'
   },
   {
      id: 3,
      text: 'Мы предлагаем самые низкие цены на рынке!',
      buttonText: 'смотреть акции',
      img: '/imgs/bgc4.jpg'
   }
]

const Home = () => {
   return (
      <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         className={cls.Swiper}
         slidesPerView={1}
         // spaceBetween={50}
         navigation
         pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}>
         {
            slidesItems.map(sliders => {
               return (
                  <SwiperSlide key={sliders.id}>
                     <div className={cls.home_container} style={{ background: `url(${sliders.img}) center / cover no-repeat` }}>
                        <div className={cls.content_home_page}>
                           <h1>{sliders.text}</h1>
                           <button className={cls.btn_home}>{sliders.buttonText}</button>
                        </div>
                        <div className={cls.overlay}></div> {/* добавлен новый элемент для затемнения */}
                     </div>
                  </SwiperSlide>
               )
            })
         }
      </Swiper>
   )
}



export default Home