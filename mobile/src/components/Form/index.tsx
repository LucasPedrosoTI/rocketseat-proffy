import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import { defaultValues } from '../../hooks/useForm';

interface FormProps {
  values: defaultValues;
  setValue: Function;
  onSubmit: () => void;
}

const Form: React.FC<FormProps> = ({ values, setValue, onSubmit }) => {
  return (
    <View style={styles.searchForm}>
      <Text style={styles.label}>Matéria</Text>
      <TextInput
        placeholderTextColor="#c1bccc"
        style={styles.input}
        placeholder="Qual a matéria?"
        value={values.subject}
        onChangeText={(text) => setValue('subject', text)}
      />

      <View style={styles.inputGroup}>
        <View style={styles.inputBlock}>
          <Text style={styles.label}>Dia da semana</Text>
          <TextInput
            placeholderTextColor="#c1bccc"
            style={styles.input}
            placeholder="Qual o dia?"
            value={values.week_day}
            onChangeText={(text) => setValue('week_day', text)}
          />
        </View>
        <View style={styles.inputBlock}>
          <Text style={styles.label}>Horário</Text>
          <TextInput
            placeholderTextColor="#c1bccc"
            style={styles.input}
            placeholder="Qual horário?"
            value={values.time}
            onChangeText={(text) => setValue('time', text)}
          />
        </View>
      </View>

      <RectButton onPress={onSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Filtrar</Text>
      </RectButton>
    </View>
  );
};

export default Form;
