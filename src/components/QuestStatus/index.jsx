import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchQuestStatusList } from '../../apis/townApi';
import { StatusTable, Loading } from '../index';

/**
 * 퀘스트 현황 컴포넌트
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

const QuestStatus = () => {
  const [page] = useState(1);
  const [size] = useState(4);
  const { data, isLoading } = useQuery(['questStatus', page, size], () =>
    fetchQuestStatusList(page, size)
  );

  const questStatus = data || [];

  const headers = ['No', '퀘스트', '선정 현황'];
  const tableData = questStatus.map((quest, index) => ({
    no: index + 1,
    title: quest.title,
    status: `${quest.selectedCnt}/${quest.capacity}`,
  }));

  if (isLoading) {
    return <Loading text='데이터를 불러오는 중...' />;
  }

  return (
    <StatusTable
      title='퀘스트 수행 현황'
      headers={headers}
      data={tableData}
      emptyMessage='퀘스트 수행 내역이 없습니다.'
      goto='/admin/quest'
    />
  );
};

export default QuestStatus;
