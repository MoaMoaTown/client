import React, { useState, useEffect, useRef } from 'react';
import { axiosInstance } from '../../apis';
import { Header, Rank } from '../../components';
import { Container, Title, Image, RankList } from './styled';
import rank from '../../assets/images/rank.svg';

const Ranking = () => {
  const [rankData, setRankData] = useState([]);
  const rankListRef = useRef(null);

  useEffect(() => {
    const fetchRankData = async () => {
      try {
        const response = await axiosInstance.get('/member/ranks');
        if (response.status === 200) {
          setRankData(response.data);
        }
      } catch (error) {
        console.error('랭킹 정보 불러오기 실패:', error);
      }
    };

    fetchRankData();
  }, []);

  useEffect(() => {
    const currentUserIndex = rankData.findIndex(
      (user) => user.isCurrentUser === 'Y'
    );
    if (currentUserIndex !== -1 && rankListRef.current) {
      const currentUserElement = rankListRef.current.children[currentUserIndex];
      currentUserElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [rankData]);

  return (
    <Container>
      <Header />
      <Image src={rank} />
      <Title>랭킹</Title>
      <RankList ref={rankListRef}>
        {rankData.map((user, index) => (
          <Rank
            key={index}
            ordinal={index + 1}
            profile={user.profile}
            nickname={user.nickname}
            balance={user.balance}
            isCurrentUser={user.isCurrentUser}
          />
        ))}
      </RankList>
    </Container>
  );
};

export default Ranking;
