import React from 'react';
import { OrdinalIcon, OrdinalText } from './styled';
import goldIcon from '../../assets/images/gold.png';
import silverIcon from '../../assets/images/silver.png';
import bronzeIcon from '../../assets/images/bronze.png';

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
