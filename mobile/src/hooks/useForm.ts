import { useState } from 'react';

export interface defaultValues {
  subject?: string;
  week_day?: string;
  time?: string;
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
