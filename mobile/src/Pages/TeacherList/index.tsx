import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { ITeacher } from '../../components/TeacherItem';
import HeaderRight from '../../components/HeaderRight';
import Form from '../../components/Form';

import styles from './styles';
import useToggle from '../../hooks/useToggle';
import useForm from '../../hooks/useForm';
import api from '../../services/api';
import useFavorites from '../../hooks/useFavorites';

const defaultValues = {
  subject: 'Matemática',
  week_day: '1',
  time: '11:00',
};

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  const { toggle, handleToggle } = useToggle(false);
  const { values, setValue } = useForm(defaultValues);
  const { favorites, loadFavorites } = useFavorites<number[]>([], 'id');

  async function handleSubmit() {
    loadFavorites();

    const { data } = await api.get('classes', {
      params: values,
    });

    handleToggle();
    setTeachers(data);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={<HeaderRight onPress={handleToggle} />}
      >
        {toggle && (
          <Form values={values} setValue={setValue} onSubmit={handleSubmit} />
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {teachers.map((teacher: ITeacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorite={favorites.includes(teacher.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default TeacherList;
