import styled from 'styled-components';

interface IAvatarProps {
  url?: string;
  large?: boolean;
}

const SAvatar = styled.div<IAvatarProps>`
  width: ${(props) => (props.large ? '36px' : '28px')};
  height: ${(props) => (props.large ? '36px' : '28px')};
  border-radius: 50%;
  background-color: #2c2c2c;
`;

const Img = styled.img`
  max-width: 100%;
`;

function Avatar({ url = '', large = false }: IAvatarProps) {
  return <SAvatar large={large}>{url !== '' && <Img src={url} />}</SAvatar>;
}

export default Avatar;
