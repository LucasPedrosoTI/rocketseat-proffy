import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem = () => {
  return (
    <article className="teacher_item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/42256673?s=460&u=8ed44bbe252addb3b58ea6c5490e1ebe55cde891&v=4"
          alt="Lucas"
        />
        <div>
          <strong>Lucas</strong>
          <span>Quimica</span>
        </div>
      </header>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fugiat
        mollitia aut? Rerum, ea?
        <br />
        <br />
        Natus, saepe iure inventore quae eius perspiciatis voluptas! Dolorum id,
        deleniti pariatur doloremque eligendi itaque reprehenderit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Sunt consectetur vitae est
        rerum explicabo, minima distinctio, ex quo sed possimus voluptate
        pariatur quam dolorem laudantium similique facilis quidem eum quis!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whastappp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
