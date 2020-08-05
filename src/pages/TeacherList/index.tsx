import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const TeacherList = () => {
  return (
    <div id="page_teacher_list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search_teachers">
          <div className="input_block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" name="subject" id="subject" />
          </div>
          <div className="input_block">
            <label htmlFor="weekday">Dia da semana</label>
            <input type="text" name="weekday" id="weekday" />
          </div>
          <div className="input_block">
            <label htmlFor="time">Hora</label>
            <input type="text" name="time" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeacherList;
