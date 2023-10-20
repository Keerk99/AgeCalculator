import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media screen and (min-width: 0) and (max-width: 424px) {
    gap: 0.3rem;
  }
`;

const Label = styled.label`
  color: ${(props) => (props.$error ? "#FF0000" : "#716f6f")};
  letter-spacing: 2px;
  font-size: 1rem;
  @media screen and (min-width: 425px) and (max-width: 767px) {
    font-size: 0.9rem;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    font-size: 0.6rem;
  }
`;

const InputText = styled.input`
  border: 1px solid ${(props) => (props.$error ? "#FF0000" : "#dcdcdc")};
  outline-color: #854dff;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  font-size: 2rem;
  max-width: 120px;
  font-weight: 800;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 100px;
    font-size: 1.8rem;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    max-width: 60px;
    font-size: 1.2rem;
    padding: 0.9rem 1rem;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    max-width: 35px;
    font-size: 0.7rem;
    padding: 0.7rem 0.8rem;
    border-radius: 0.5rem;
  }
`;

export function Input(props) {
  const {
    id,
    name,
    value,
    placeholder,
    forName,
    maxLenght,
    setInputValue,
    errorText,
  } = props;

  const handleChange = (e, len, setInputValue) => {
    let value = e.target.value;

    value = value.replace(/[^0-9]/g, "");

    if (value.length > len) {
      value = value.slice(0, len);
    }

    setInputValue(value);
  };

  return (
    <InputContainer>
      <Label $error={errorText} htmlFor={forName}>
        {forName}
      </Label>
      <InputText
        $error={errorText}
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          handleChange(e, maxLenght, setInputValue);
        }}
      />
    </InputContainer>
  );
}
