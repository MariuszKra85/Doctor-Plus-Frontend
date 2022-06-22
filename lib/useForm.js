import { useState } from 'react';

const useForm = (initial = {}) => {
  const [inputs, setInputs] = useState(initial);

  const handleChange = (e) => {
    let { name, type, value } = e.target;

    if (type === 'file') {
      [value] = e.target.files;
    }
    console.log('dziala!');

    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const clearForm = () => {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  };
  return {
    inputs,
    handleChange,
    clearForm,
  };
};
export default useForm;
