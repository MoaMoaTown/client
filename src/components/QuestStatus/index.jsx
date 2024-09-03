import React from 'react';
import { useQuery } from 'react-query';
import { fetchQuestStatusList } from '../../apis/townApi';
import { StatusTable } from '../index';

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
  const { data: questStatus = [] } = useQuery(
    'questStatus',
    fetchQuestStatusList
  );

  const headers = ['No', '퀘스트', '수행인'];
  const tableData = questStatus.map((quest, index) => ({
    no: index + 1,
    title: quest.title,
    status: `${quest.selectedCnt}/${quest.capacity}`,
  }));

  return (
    <StatusTable title='퀘스트 수행 현황' headers={headers} data={tableData} />
  );
};

export default QuestStatus;
