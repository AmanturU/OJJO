import React from "react";
import cls from "./index.module.css";
import { Link } from "react-router-dom";

const bottomItems = [
   {
      name: '(c) 2020 OJJO jewelry',
      id: 1
   },
   {
      name: 'Договор публичной офферты',
      id: 2
   },
   {
      name: 'Контрагентам',
      id: 3
   },
   {
      name: 'Сделано Figma.info',
      id: 4
   }
]

const Footer = () => {
   return (
      <div className={cls.footer}>
         <div className={cls.top_footer}>
            <div className={cls.header_links}>
               <h3>Полезные ссылки</h3>
               <ul>
                  <Link to="/">Home</Link>

                  <Link to="/about">about</Link>

                  <Link to="/collection">collection</Link>
               </ul>
            </div>
            <div>
               <h3>оплата</h3>
               <ul>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                     saepe impedit officiis. Nihil qui saepe commodi obcaecati, in quas
                  </p>
               </ul>
            </div>
            <div>
               <h3>контакты</h3>
               <ul>
                  <p>8 (812) 234-56-55</p>
                  <p>8 (812) 234-56-55</p>
                  <p>ojjo@ojjo.ru</p>
               </ul>
            </div>
            <div>
               <h3>социальные сети</h3>
               <ul>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Ullamcorper justo, nec, pellentesque.
                  </p>
               </ul>
            </div>
         </div>
         <ul className={cls.bottom_footer}>
            {
               bottomItems.map(item => (
                  <li key={item.id}>{item.name}</li>
               ))
            }
         </ul>
      </div>
   );
};

export default Footer;