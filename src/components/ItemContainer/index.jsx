import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { selectedTypeState, selectedFaceState } from '../../store/atoms';
import { fetchMyclothes } from '../../apis/closetApi';
import { FaceItem, ClothItem, Loading } from '../index';
import { ContainerWrapper, EmptyMsg, EmptyImg, EmptyWrapper } from './styled';
import face1 from '../../assets/images/heendy_face1.png';
import face2 from '../../assets/images/heendy_face2.png';
import face3 from '../../assets/images/heendy_face3.png';
import face4 from '../../assets/images/heendy_face4.png';
import face5 from '../../assets/images/heendy_face5.png';
import face6 from '../../assets/images/heendy_face6.png';
import empty from '../../assets/images/empty.png';

/**
 * 아이템 리스트 컨테이너
 * @author 임원정
 * @since 2024.09.01
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.01  	임원정        최초 생성
 * </pre>
 */

const ItemContainer = ({ onSelectItem }) => {
  const selectedType = useRecoilValue(selectedTypeState);
  const [selectedFace, setSelectedFace] = useRecoilState(selectedFaceState);

  const faceItems = [
    { id: 1, imgUrl: face1, type: 0 },
    { id: 2, imgUrl: face2, type: 0 },
    { id: 3, imgUrl: face3, type: 0 },
    { id: 4, imgUrl: face4, type: 0 },
    { id: 5, imgUrl: face5, type: 0 },
    { id: 6, imgUrl: face6, type: 0 },
  ];

  const { data, isLoading, isError } = useQuery(
    ['myclothes', selectedType],
    () => fetchMyclothes(selectedType),
    { enabled: selectedType !== 0 } // 얼굴 타입일 경우 API 호출 안함
  );

  if (isLoading) {
    return (
      <ContainerWrapper isLoading={true}>
        <Loading />
      </ContainerWrapper>
    );
  }

  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  // 선택된 타입이 얼굴일 때
  if (selectedType === 0) {
    return (
      <ContainerWrapper face={selectedType === 0}>
        {faceItems.map((item) => (
          <FaceItem
            key={item.id}
            item={item}
            onClick={() => setSelectedFace(item.imgUrl)}
            isSelected={selectedFace === item.imgUrl}
          />
        ))}
      </ContainerWrapper>
    );
  }

  return (
    <>
      {data && data.length > 0 ? (
        <ContainerWrapper>
          {data.map((item) => (
            <ClothItem key={item.clothId} item={item} onClick={onSelectItem} />
          ))}
        </ContainerWrapper>
      ) : (
        <EmptyWrapper>
          <EmptyImg src={empty} />
          <EmptyMsg>가진 옷이 없습니다</EmptyMsg>
        </EmptyWrapper>
      )}
    </>
  );
};

export default ItemContainer;
