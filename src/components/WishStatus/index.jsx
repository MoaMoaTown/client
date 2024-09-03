import React from 'react';
import { useQuery } from 'react-query';
import { fetchMemberWishRequests } from '../../apis/townApi';
import { StatusTable } from '../index';

/**
 * 위시 상품 현황 컴포넌트
 * @author 임원정
 * @since 2024.09.03
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.03 	임원정        최초 생성
 * </pre>
 */

const WishStatus = () => {
  const { data: wishRequests = [] } = useQuery(
    'wishRequests',
    fetchMemberWishRequests
  );

  const headers = ['No', '위시 상품', '신청인'];
  const tableData = wishRequests.map((wishRequest, index) => ({
    no: index + 1,
    name: wishRequest.wishName,
    nickName: wishRequest.nickName,
  }));

  return (
    <StatusTable title='위시 요청 현황' headers={headers} data={tableData} />
  );
};

export default WishStatus;
