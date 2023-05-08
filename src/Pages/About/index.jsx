import React from "react"
import cls from "../../Styles/Pages/About.module.css"

const cards = [
   {
      id: 1,
      title: "Как выбрать часы для своей будущей жены",
      img: "/imgs/руки.png"
   },
   {
      id: 2,
      title: "Запонки для мужа: 7 ключевых правил покупки аксессуара",
      img: "/imgs/ожерелье.png"
   },
   {
      id: 3,
      title: "Как выбрать обручальные кольца молодоженам",
      img: "/imgs/приглашения.png"
   },
]

const About = () => {
   return (
      <>
         <div className={cls.about_block}>
            <div className={cls.title_about_block}>
               <h3>Полезные статьи</h3>
               <h1>Лучшие советы по подбору дорогих подарков</h1>
            </div>
            <div className={cls.cardsList}>
               {
                  cards.map((item) => (
                     <div
                        className={cls.cardList}
                        key={item.id}
                        style={{ background: `url(${item.img}) center / cover no-repeat` }}
                     >
                        <p>
                           {item.title}
                        </p>
                     </div>
                  ))
               }
            </div>
            <button className={cls.btn_read}>Читать наш блог</button>
            <div className={cls.socMedia_block}>
               <div className={cls.title_about_block}>
                  <h3>#ojjo_jewerly</h3>
                  <h1>Мы в социальных сетях</h1>
               </div>
               <div className={cls.gallery_imgs}>

                  <div className={cls.topGallery_imgs}>
                     <img className={cls.pauseImg} src="/imgs/pause-img.png" alt="galleryImg" />
                     <div>
                        <img className={cls.leftImg} src="/imgs/left-first-block.png" alt="galleryImg" />
                        <img className={cls.rightImg} src="/imgs/right-first-block.png" alt="galleryImg" />
                     </div>
                  </div>
                  <div className={cls.bottomGallery_imgs}>
                     <div>
                        <img className={cls.leftImg} src="/imgs/left-second-block.png" alt="galleryImg" />
                        <img className={cls.rightImg} src="/imgs/right-second-block.png" alt="galleryImg" />
                     </div>
                     <img className={cls.pauseImg} src="/imgs/pause-img2.png" alt="galleryImg" />
                  </div>

               </div>
            </div>
         </div>
         <div className={cls.invite_block}>
            <h3>Полезные советы и персональный предложения</h3>
            <h1>Эксклюзивная рассылка</h1>
            <div className={cls.bottomIntite_block}>
               <ul>
                  <p>
                     <img src="/imgs/playButton.png" alt="playButton" />
                     Личный менеджер
                  </p>
                  <p>
                     <img src="/imgs/playButton.png" alt="playButton" />
                     Доставка и оформление
                  </p>
                  <p>
                     <img src="/imgs/playButton.png" alt="playButton" />
                     Индивидуальный дизайн
                  </p>
               </ul>
               <div className={cls.inputContainer}>
                  <input required="" placeholder="ВАШ E-MAIL" type="email" />
                  <button className={cls.inviteBtn} type="button">
                     ОТПРАВИТЬ
                  </button>

               </div>
            </div>
         </div>
      </>
   )
}

export default About