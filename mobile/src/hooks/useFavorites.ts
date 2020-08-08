import { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface ITeacher {
  [key: string]: any;
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  user_id: string;
  whatsapp: string;
}

export default <FavoriteType = undefined>(
  defaultValues: FavoriteType,
  property: string
) => {
  const [favorites, setFavorites] = useState<FavoriteType>(defaultValues);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoriteTeachers = JSON.parse(response);

        if (property) {
          const favoriteTeachersFiltered = favoriteTeachers.map(
            (teacher: ITeacher) => teacher[property]
          );
          return setFavorites(favoriteTeachersFiltered);
        }

        setFavorites(favoriteTeachers);
      }
    });
  }

  return { favorites, loadFavorites };
};
