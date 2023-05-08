import React from "react"
import cls from "../../Styles/Pages/Collection.module.css"

const types = [
   {
      id: 1,
      title: "Свадьба",
   },
   {
      id: 2,
      title: "Мужу",
   },
   {
      id: 3,
      title: "Жене",
   },
   {
      id: 4,
      title: "Партнёру",
   },
   {
      id: 5,
      title: "Коллекции",
   },
   {
      id: 6,
      title: "Редкость",
   },
]

const cards = [
   {
      id: 1,
      title: "Кольца",
      img: "/imgs/кольца.png"
   },
   {
      id: 2,
      title: "Серьги",
      img: "/imgs/сельги.png"
   },
   {
      id: 3,
      title: "Подвески",
      img: "/imgs/подвески.png"
   },
   {
      id: 4,
      title: "Запонки",
      img: "/imgs/заколки.png"
   },
   {
      id: 5,
      title: "Браслеты",
      img: "/imgs/браслеты.png"
   },
   {
      id: 6,
      title: "Часы",
      img: "/imgs/часы.png"
   },
]

const Collection = () => {
   return (
      <>
         <div className={cls.collection_block}>
            <div className={cls.title_collection_block}>
               <h3>К мероприятиям</h3>
               <h1>Настоящая красота здесь!</h1>
            </div>
            <ul className={cls.typesList}>
               {
                  types.map((item) => (
                     <li key={item.id}>{item.title}</li>
                  ))
               }
            </ul>
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
         </div>

         <div className={cls.invite_block}>
            <h3>Не знаете, что выбрать?</h3>
            <h1>Посетите наши салоны в Москве</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.</p>
            <button className={cls.btn_invite}>Наши салоны</button>
         </div>
      </>
   )
}

export default Collection