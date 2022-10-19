import { useState } from 'react';
import styled from 'styled-components';

import StyledButton from '../../components/styled/styled-button';
import StyledInput from '../../components/styled/styled-input';

type TFormProp = {
  onFormSubmit: (inputValue: string) => void;
};

const StyledForm = styled.form`
  display: flex;
  width: 70%;
  padding: 20px;
`;

const FormButton = styled(StyledButton)`
  border-radius: 0;
  border-radius: 0 10px 10px 0;
  font-size: 15px;
`;

function SearchForm({ onFormSubmit }: TFormProp) {
  const [inputValue, setInputValue] = useState('');

  function onInputChange(e: { target: { value: string } }) {
    const value = e.target.value;
    setInputValue(value);
  }

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        onFormSubmit(inputValue);
      }}
    >
      <StyledInput type="text" onChange={onInputChange} />
      <FormButton>SEARCH</FormButton>
    </StyledForm>
  );
}

export default SearchForm;
