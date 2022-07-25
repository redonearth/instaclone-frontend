import { gql, useQuery, useReactiveVar } from '@apollo/client';
import { useEffect } from 'react';
import { isLoggedInVar } from '../apollo';

interface ISeeMeQuery {
  seeMe: {
    username: string;
    avatar?: string;
  };
  error?: string;
}

const SEE_ME_QUERY = gql`
  query seeMe {
    seeMe {
      username
      avatar
    }
  }
`;

function useLoggedInUser() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data } = useQuery<ISeeMeQuery>(SEE_ME_QUERY, {
    skip: !isLoggedIn,
  });
  useEffect(() => {
    if (data?.seeMe === null) {
      isLoggedInVar(false);
    }
  }, [data]);
  return { data };
}

export default useLoggedInUser;
