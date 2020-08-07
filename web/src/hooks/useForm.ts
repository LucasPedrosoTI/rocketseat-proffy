import { useState } from 'react';
import { ScheduleItem } from '../utils/types';

interface defaultValues {
  name?: string;
  avatar?: string;
  whatsapp?: string;
  bio?: string;
  subject?: string;
  cost?: string;
  week_day?: string;
  time?: string;
  schedule?: ScheduleItem[];
}

export default (defaultValues: defaultValues) => {
  const [values, setValues] = useState(defaultValues);

  const setValue = (key: string, value: any) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  return { values, setValue };
};
