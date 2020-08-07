import React, { FormEvent, useState } from 'react';

import './styles.css';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import useForm from '../../hooks/useForm';
import api from '../../services/api';
import { weekdays, classes } from '../../utils/constants';
import { ITeacher } from '../../utils/types';

const defaultValues = {
  subject: '',
  week_day: '',
  time: '',
};

const TeacherList = () => {
  const { values, setValue } = useForm(defaultValues);
  const [teachers, setTeachers] = useState([]);

  const searchTeachers = async (e: FormEvent) => {
    e.preventDefault();

    const { data } = await api.get('classes', {
      params: values,
    });

    setTeachers(data);
  };

  return (
    <div id="page_teacher_list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search_teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            options={classes}
            value={values.subject}
            onChange={(e) => setValue('subject', e.currentTarget.value)}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            options={weekdays}
            value={values.week_day}
            onChange={(e) => setValue('week_day', e.currentTarget.value)}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={values.time}
            onChange={(e) => {
              setValue('time', e.currentTarget.value);
            }}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: ITeacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </main>
    </div>
  );
};

export default TeacherList;
