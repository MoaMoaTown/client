import React from 'react';
import { OrdinalIcon, OrdinalText } from './styled';
import goldIcon from '../../assets/images/gold.png';
import silverIcon from '../../assets/images/silver.png';
import bronzeIcon from '../../assets/images/bronze.png';

/**
 * 랭킹 내 순위 표시 컴포넌트
 * @author 이주현
 * @since 2024.08.28
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자      수정내용
 * ----------  --------    ---------------------------
 * 2024.08.28  이주현      최초 생성
 * </pre>
 */

const Ordinal = ({ ordinal }) => {
  let icon;
  switch (ordinal) {
    case 1:
      icon = goldIcon;
      break;
    case 2:
      icon = silverIcon;
      break;
    case 3:
      icon = bronzeIcon;
      break;
    default:
      icon = null;
  }

  if (icon) {
    return <OrdinalIcon src={icon} alt={`${ordinal}위 아이콘`} />;
  } else {
    return <OrdinalText>{ordinal}</OrdinalText>;
  }
};

export default Ordinal;
