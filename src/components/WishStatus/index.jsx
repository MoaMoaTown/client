import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchMemberWishRequests } from '../../apis/townApi';
import { StatusTable, Loading } from '../index';

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
  const [page] = useState(1);
  const [size] = useState(4);
  const { data, isLoading } = useQuery(['wishRequests', page, size], () =>
    fetchMemberWishRequests(page, size)
  );

  const wishRequests = data || [];

  const headers = ['No', '위시 상품', '신청인'];
  const tableData = wishRequests.map((wishRequest, index) => ({
    no: index + 1,
    name: wishRequest.wishName,
    nickName: wishRequest.nickName,
  }));

  if (isLoading) {
    return <Loading text='데이터를 불러오는 중...' />;
  }

  return (
    <StatusTable
      title='위시 요청 현황'
      headers={headers}
      data={tableData}
      emptyMessage='위시 요청 내역이 없습니다.'
      goto='/admin/wish-request'
    />
  );
};

export default WishStatus;
