import React, { useCallback } from 'react';
import { View, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { ITeacher } from '../../components/TeacherItem';
import useFavorites from '../../hooks/useFavorites';

import styles from './styles';

const Favorites = () => {
  const { favorites, loadFavorites } = useFavorites<ITeacher[]>([], '');

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [])
  );

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {favorites.map((teacher: ITeacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorite={favorites.includes(teacher)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Favorites;
