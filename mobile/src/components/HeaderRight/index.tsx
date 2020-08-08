import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

const HeaderRight = ({ onPress }: { onPress: () => void }) => (
  <BorderlessButton onPress={onPress}>
    <Feather name="filter" size={20} color="#fff" />
  </BorderlessButton>
);

export default HeaderRight;
