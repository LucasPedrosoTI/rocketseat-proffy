import { useState } from 'react';

export default (defaultValue: boolean) => {
  const [toggle, setToggle] = useState(defaultValue);

  function handleToggle() {
    setToggle(!toggle);
  }

  return { toggle, handleToggle };
};
