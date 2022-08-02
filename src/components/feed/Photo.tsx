import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import Avatar from '../Avatar';
import { FatText } from '../sharedStyles';

interface IPhotoProps {
  id: number;
  user: {
    username: string;
    avatar?: string;
  };
  file?: string;
  isLiked: boolean;
  likes: number;
}

const PhotoContainer = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  margin-bottom: 60px;
  max-width: 615px;
`;

const PhotoHeader = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(239, 239, 239);
`;

const Username = styled(FatText)`
  margin-left: 10px;
`;

const PhotoFile = styled.img`
  min-width: 100%;
  max-width: 100%;
`;

const PhotoData = styled.div`
  padding: 12px 15px;
`;

const PhotoActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
  svg {
    font-size: 20px;
  }
`;

const PhotoAction = styled.div`
  margin-right: 10px;
`;

const Likes = styled(FatText)`
  display: block;
  margin-top: 10px;
`;

function Photo({ id, user, file, isLiked, likes }: IPhotoProps) {
  return (
    <PhotoContainer key={id}>
      <PhotoHeader>
        <Avatar large url={user.avatar} />
        <Username>{user.username}</Username>
      </PhotoHeader>
      <PhotoFile src={file} alt={id.toString()} />
      <PhotoData>
        <PhotoActions>
          <div>
            <PhotoAction>
              <FontAwesomeIcon
                style={{ color: isLiked ? 'tomato' : 'inherit' }}
                icon={isLiked ? solidHeart : faHeart}
                size="2x"
              />
            </PhotoAction>
            <PhotoAction>
              <FontAwesomeIcon icon={faComment} size="2x" />
            </PhotoAction>
            <PhotoAction>
              <FontAwesomeIcon icon={faPaperPlane} size="2x" />
            </PhotoAction>
          </div>
          <div>
            <FontAwesomeIcon icon={faBookmark} size="2x" />
          </div>
        </PhotoActions>
        <Likes>{likes === 1 ? '1 like' : `${likes} likes`}</Likes>
      </PhotoData>
    </PhotoContainer>
  );
}

export default Photo;
