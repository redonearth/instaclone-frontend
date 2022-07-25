import styled from 'styled-components';

const SAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #2c2c2c;
`;

const Img = styled.img`
  max-width: 100%;
`;

function Avatar({ url = '' }) {
  return <SAvatar>{url !== '' && <Img src={url} />}</SAvatar>;
}

export default Avatar;
