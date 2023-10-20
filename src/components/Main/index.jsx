import { useState, useEffect } from "react";
import styled from "styled-components";
import arrow from "../../assets/img/icon-arrow.svg";
import { Input } from "../Inputs";
import { calculateAge } from "../CalculateAge";

const MainSection = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Section = styled.section`
  background: #ffffff;
  padding: 3.5rem;
  border-radius: 2rem 2rem 13rem 2rem;
  margin: 2rem;
  @media screen and (min-width: 425px) and (max-width: 767px) {
    padding: 3rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    margin: 1rem;
    border-radius: 2rem 2rem 8rem 2rem;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    padding: 2.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin: 1rem;
    border-radius: 1.5rem 1.5rem 5rem 1.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 425px) and (max-width: 767px) {
    align-items: center;
    gap: 3.5rem;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    align-items: center;
    gap: 2.5rem;
  }
`;

const DivForm = styled.div`
  display: flex;
  gap: 2rem;
  @media screen and (min-width: 1024px) and (max-width: 1443px) {
    gap: 1.5rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    gap: 1rem;
  }
  @media screen and (min-width: 0) and (max-width: 767px) {
    gap: 0;
    width: 100%;
    justify-content: space-between;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media screen and (min-width: 0) and (max-width: 424px) {
    gap: 0.3rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 750px;
  @media screen and (min-width: 1024px) and (max-width: 1443px) {
    width: 710px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 600px;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    width: 320px;
    position: relative;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    width: 200px;
    position: relative;
  }
`;

const Line = styled.hr`
  border: 1px solid #dcdcdc;
  width: 100%;
`;

const Button = styled.button`
  background: #854dff;
  border: none;
  border-radius: 50%;
  padding: 1rem;
  cursor: pointer;
  transition: background ease 0.5s;
  &&:hover {
    background: #000000;
  }
  @media screen and (min-width: 0) and (max-width: 767px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: fit-content;
    height: fit-content;
  }
`;

const Img = styled.img`
  width: 55px;
  @media screen and (min-width: 1024px) and (max-width: 1443px) {
    width: 50px;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    width: 35px;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    width: 25px;
  }
`;

const Span = styled.span`
  color: red;
  font-style: italic;
  font-size: 0.9rem;
  @media screen and (min-width: 425px) and (max-width: 767px) {
    font-size: 0.6rem;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    font-size: 0.5rem;
    max-width: 50px;
  }
`;

const Results = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 6rem;
  font-style: italic;
  font-weight: 700;
  gap: 0.5rem;
  line-height: 1.1;
  @media screen and (min-width: 1024px) and (max-width: 1443px) {
    font-size: 5.5rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 5rem;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    font-size: 3.5rem;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    font-size: 2rem;
  }
`;

const PResult = styled.p`
  color: #854dff;
  margin: 0;
`;

const P = styled.p`
  margin: 0;
`;

export default function Main() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [age, setAge] = useState({ years: "--", months: "--", days: "--" });
  const [errorMessage1, setErrorMessage1] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");
  const [errorMessage3, setErrorMessage3] = useState("");

  const handleCalculateAge = (e) => {
    e.preventDefault();

    const { age: newAge, errors } = calculateAge(
      inputValue1,
      inputValue2,
      inputValue3
    );

    setAge(newAge);
    setErrorMessage1(errors.errorMessage1 || "");
    setErrorMessage2(errors.errorMessage2 || "");
    setErrorMessage3(errors.errorMessage3 || "");
  };

  useEffect(() => {
    setAge({ years: "--", months: "--", days: "--" });
  }, [inputValue1, inputValue2, inputValue3]);

  return (
    <MainSection>
      <Section>
        <Form onSubmit={handleCalculateAge}>
          <DivForm>
            <InputContainer>
              <Input
                id="day"
                name="day"
                placeholder="DD"
                value={inputValue1}
                maxLenght={2}
                setInputValue={setInputValue1}
                forName="DAY"
                errorText={errorMessage1}
              />
              {errorMessage1 && <Span>{errorMessage1}</Span>}
            </InputContainer>
            <InputContainer>
              <Input
                id="month"
                name="month"
                placeholder="MM"
                value={inputValue2}
                maxLenght={2}
                setInputValue={setInputValue2}
                forName="MONTH"
                errorText={errorMessage2}
              />
              {errorMessage2 && <Span>{errorMessage2}</Span>}
            </InputContainer>
            <InputContainer>
              <Input
                id="year"
                name="year"
                placeholder="YYYY"
                value={inputValue3}
                maxLenght={4}
                setInputValue={setInputValue3}
                forName="YEAR"
                errorText={errorMessage3}
              />
              {errorMessage3 && <Span>{errorMessage3}</Span>}
            </InputContainer>
          </DivForm>
          <ButtonContainer>
            <Line />
            <Button type="submit">
              <Img src={arrow} alt="Calculate" />
            </Button>
          </ButtonContainer>
        </Form>
        <Results>
          <ResultContainer>
            <PResult>{age.years}</PResult>
            <P>{age.years === 1 ? "year" : "years"}</P>
          </ResultContainer>
          <ResultContainer>
            <PResult>{age.months}</PResult>
            <P>{age.months === 1 ? "month" : "months"}</P>
          </ResultContainer>
          <ResultContainer>
            <PResult>{age.days}</PResult>
            <P>{age.days === 1 ? "day" : "days"}</P>
          </ResultContainer>
        </Results>
      </Section>
    </MainSection>
  );
}
