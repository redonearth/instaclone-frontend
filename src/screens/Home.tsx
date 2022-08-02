import { gql, useQuery } from '@apollo/client';
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import Avatar from '../components/Avatar';
import { FatText } from '../components/sharedStyles';

interface ISeeFeedQuery {
  seeFeed: {
    id: number;
    user: {
      username: string;
      avatar?: string;
    };
    file?: string;
    caption?: string;
    likes: number;
    comments: number;
    createdAt: string;
    isMine: boolean;
  }[];
}

const SEE_FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      id
      user {
        username
        avatar
      }
      file
      caption
      likes
      comments
      createdAt
      isMine
    }
  }
`;

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

function Home() {
  const { data } = useQuery<ISeeFeedQuery>(SEE_FEED_QUERY);
  return (
    <>
      {data?.seeFeed?.map((photo) => (
        <PhotoContainer key={photo.id}>
          <PhotoHeader>
            <Avatar large url={photo.user.avatar} />
            <Username>{photo.user.username}</Username>
          </PhotoHeader>
          <PhotoFile src={photo.file} alt={photo.id.toString()} />
          <PhotoData>
            <PhotoActions>
              <div>
                <PhotoAction>
                  <FontAwesomeIcon icon={faHeart} size="2x" />
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
            <Likes>
              {photo.likes === 1 ? '1 like' : `${photo.likes} likes`}
            </Likes>
          </PhotoData>
        </PhotoContainer>
      ))}
    </>
  );
}

export default Home;
