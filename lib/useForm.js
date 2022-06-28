import { useEffect, useState } from 'react';

const useForm = (initial = {}) => {
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join('');
  console.log(initialValues);

  useEffect(() => {
    setInputs(initial);
  }, [initialValues]);

  const handleChange = (e) => {
    let { name, type, value } = e.target;

    if (type === 'file') {
      [value] = e.target.files;
    }

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
