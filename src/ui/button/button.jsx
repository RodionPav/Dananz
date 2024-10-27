/* eslint-disable react/prop-types */
import styled from "styled-components";

const Button = styled.button`
  min-width: 142px;
  min-height: 49px;
  border-radius: 5px;
  padding: 14px 32px;
  color: var(--color-white);
  font-size: clamp(0.75rem, 0.662rem + 0.3756vw, 1rem);
  line-height: 21px;
  text-align: center;
  text-decoration: none;
  background: var(--color-blue);

  &:hover {
    text-shadow: 1px 1px 2px rgb(198, 189, 190);
  }

  &:focus {
    box-shadow: 0 0 0 4px #cbd6ee;
    outline: none;
  }

  &:active {
    text-shadow: 1px 1px 2px rgb(146, 140, 141);
  }
`;

const Container = styled.div`
  text-align: center;
`;

const ButtonWrrapper = ({ text }) => {
  return (
    <Container>
      <Button>{text}</Button>
    </Container>
  );
};

export default ButtonWrrapper;
