import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
import useToggle from '../../hooks/useToggle';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

export interface ITeacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  user_id: string;
  whatsapp: string;
}

const TeacherItem = ({
  teacher,
  favorite,
}: {
  teacher: ITeacher;
  favorite: boolean;
}) => {
  const { toggle, handleToggle } = useToggle(favorite);

  const handleLinkToWhatsapp = () => {
    api.post('connections', { user_id: teacher.id });
    Linking.openURL(`whatsapp://send?phone=55${teacher.whatsapp}`);
  };

  const handleToggleFavorite = async () => {
    const favorites = await AsyncStorage.getItem('favorites');
    const favArray: ITeacher[] = JSON.parse(favorites!);

    if (toggle) {
      const favoriteIndex = favArray.findIndex(
        (teacherItem: ITeacher) => teacherItem.id === teacher.id
      );
      favArray.splice(favoriteIndex, 1);
      handleToggle();
    } else {
      favArray.push(teacher);
      handleToggle();
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favArray));
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={{ uri: teacher.avatar }} style={styles.avatar} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora{'   '}
          <Text style={styles.priceValue}>R$ {teacher.cost},00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            style={[styles.favoriteButton, toggle ? styles.favorited : {}]}
            onPress={handleToggleFavorite}
          >
            {toggle ? (
              <Image source={unfavoriteIcon} />
            ) : (
              <Image source={heartOutlineIcon} />
            )}
          </RectButton>

          <RectButton
            onPress={handleLinkToWhatsapp}
            style={styles.contactButton}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
