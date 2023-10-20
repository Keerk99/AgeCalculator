import styled from "styled-components";

const FooterSection = styled.footer`
  display: flex;
  gap: 1.5rem;
  justify-content: end;
  padding: 2rem;
  align-items: center;
`;

const A = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #1f3251;
  font-size: 1.5rem;
  text-decoration: none;
  transition: transform ease 0.5s;
  &&:hover {
    transform: scale(1.1);
  }
`;

export default function Footer() {
  return (
    <FooterSection>
      <A
        href="https://www.linkedin.com/in/keerk99/?locale=en_US"
        target="_blank"
      >
        <i className="fa-brands fa-linkedin"></i>
      </A>
      <A href="https://github.com/Keerk99" target="_blank">
        <i className="fa-brands fa-github"></i>
      </A>
    </FooterSection>
  );
}
