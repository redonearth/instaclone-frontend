import { gql, useQuery } from '@apollo/client';
import Photo from '../components/feed/Photo';

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
    isLiked: boolean;
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
      isLiked
    }
  }
`;

function Home() {
  const { data } = useQuery<ISeeFeedQuery>(SEE_FEED_QUERY);
  return (
    <>
      {data?.seeFeed?.map((photo) => (
        <Photo key={photo.id} {...photo} />
      ))}
    </>
  );
}

export default Home;
