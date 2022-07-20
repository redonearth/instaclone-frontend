import styled from 'styled-components';

const SSeparator = styled.div`
  margin: 18px 40px;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  div {
    flex: 1;
    height: 1px;
    background-color: ${(props) => props.theme.borderColor};
  }
  span {
    padding: 0px 10px;
    color: ${(props) => props.theme.borderColor};
  }
`;

function Separator() {
  return (
    <SSeparator>
      <div />
      <span>또는</span>
      <div />
    </SSeparator>
  );
}

export default Separator;
