import styled from 'styled-components';

interface INotificationProps {
  message?: string;
}

const Message = styled.h4`
  color: #26de81;
  font-weight: bold;
  font-size: 13px;
  margin: 8px 0px;
`;

function Notification({ message }: INotificationProps) {
  return <Message>{message}</Message>;
}

export default Notification;
