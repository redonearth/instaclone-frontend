import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BaseBox } from '../shared';

interface IBottomBoxProps {
  cta: string;
  link: string;
  linkText: string;
}

const Container = styled(BaseBox)`
  padding: 20px 0px;
  text-align: center;
  a {
    margin-left: 5px;
    font-weight: 700;
    color: ${(props) => props.theme.accentColor};
  }
`;

function BottomBox({ cta, link, linkText }: IBottomBoxProps) {
  return (
    <Container>
      <span>{cta}</span>
      <Link to={link}>{linkText}</Link>
    </Container>
  );
}

export default BottomBox;
