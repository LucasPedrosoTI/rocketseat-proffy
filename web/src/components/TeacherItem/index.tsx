import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import { ITeacher } from '../../utils/types';
import api from '../../services/api';

interface TeacherItemProps {
  teacher: ITeacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const { name, avatar, subject, bio, cost, whatsapp, id } = teacher;

  const createNewConnection = () => {
    api.post('connections', { user_id: id });
  };

  return (
    <article className="teacher_item">
      <header>
        <img src={avatar} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>{bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {cost}</strong>
        </p>
        <a
          type="button"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://wa.me/55${whatsapp}?text=Olá, estou interessado nas aulas`}
          onClick={createNewConnection}
        >
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
