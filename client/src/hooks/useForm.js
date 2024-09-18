import { useState } from 'react';

const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e, submitFn) => {
    e.preventDefault();
    submitFn();
  };

  return {
    values,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
