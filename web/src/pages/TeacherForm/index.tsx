import React, { FormEvent } from 'react';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import { weekdays, classes } from '../../utils/constants';

import useForm from '../../hooks/useForm';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

const defaultValues = {
  name: '',
  avatar: '',
  whatsapp: '',
  bio: '',
  subject: '',
  cost: '',
  schedule: [
    {
      week_day: 0,
      from: '',
      to: '',
    },
  ],
};

const TeacherForm = () => {
  const { values, setValue } = useForm(defaultValues);
  const history = useHistory();

  const addNewScheduleItem = () => {
    setValue('schedule', [
      ...values.schedule,
      { week_day: 0, from: '', to: '' },
    ]);
  };

  const setScheduleItemValue = (
    position: number,
    field: string,
    value: string
  ) => {
    const updatedSchedule = values?.schedule?.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setValue('schedule', updatedSchedule);
  };

  const handleCreateClass = (e: FormEvent) => {
    e.preventDefault();

    api
      .post('classes', values)
      .then(() => {
        alert('Class created successfully');

        history.push('/');
      })
      .catch(() => alert('Class creation failed'));
  };

  return (
    <div id="page_teacher_form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              name="name"
              label="Nome Completo"
              value={values.name}
              onChange={(e) => setValue('name', e.currentTarget.value)}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={values.avatar}
              onChange={(e) => setValue('avatar', e.currentTarget.value)}
            />
            <Input
              name="whatsapp"
              type="tel"
              label="Whatsapp"
              value={values.whatsapp}
              onChange={(e) => setValue('whatsapp', e.currentTarget.value)}
            />
            <Textarea
              name="bio"
              label="Biografia"
              value={values.bio}
              onChange={(e) => setValue('bio', e.currentTarget.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name="subject"
              label="Matéria"
              value={values.subject}
              options={classes}
              onChange={(e) => setValue('subject', e.currentTarget.value)}
            />

            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={values.cost}
              type="number"
              onChange={(e) => setValue('cost', e.currentTarget.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                <span>+</span> Novo horário
              </button>
            </legend>

            {values?.schedule?.map((scheduleItem, index) => (
              <div
                key={scheduleItem.week_day + index}
                className="schedule_item"
              >
                <Select
                  name="week_day"
                  label="Dia da semana"
                  options={weekdays}
                  value={scheduleItem.week_day}
                  onChange={(e) =>
                    setScheduleItemValue(
                      index,
                      'week_day',
                      e.currentTarget.value
                    )
                  }
                />
                <Input
                  name="from"
                  label="Das"
                  type="time"
                  value={scheduleItem.from}
                  onChange={(e) =>
                    setScheduleItemValue(index, 'from', e.currentTarget.value)
                  }
                />
                <Input
                  name="to"
                  label="Até"
                  type="time"
                  value={scheduleItem.to}
                  onChange={(e) =>
                    setScheduleItemValue(index, 'to', e.currentTarget.value)
                  }
                />
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
