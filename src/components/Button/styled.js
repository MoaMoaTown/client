import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";

/**
 * 버튼 style
 * @author 이주현
 * @since 2024.08.20
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.08.20  	이주현        최초 생성
 * 2024.08.27   이주현        signupBtn, loginBtn 스타일 추가
 * 2024.08.28   이주현        joinBtn 스타일 추가
 * 2024.08.30   이주현        confirmBtn 스타일 추가
 * 2024.08.30   임원정        entryBtn 스타일 추가
 * </pre>
 */

const buttonStyles = {
  signupBtn: css`
    width: 45dvw;
    height: 5dvh;
    background-color: ${colors.orange};
    color: white;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    font-weight: bold;

    &:disabled {
      background-color: ${colors.gray};
      cursor: not-allowed;
      color: white;
    }
  `,
  loginBtn: css`
    width: 45dvw;
    height: 5dvh;
    background-color: ${colors.green};
    color: white;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    font-weight: bold;

    &:disabled {
      background-color: ${colors.gray};
      cursor: not-allowed;
      color: white;
    }
  `,
  joinBtn: css`
    width: 45dvw;
    height: 5dvh;
    background-color: white;
    color: black;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    margin-top: 2dvh;

    &:disabled {
      cursor: not-allowed;
      color: ${colors.gray};
    }
  `,
  buyBtn: css`
    width: 100%;
    height: 5dvh;
    background-color: ${colors.green};
    color: white;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    &:disabled {
      background-color: ${colors.gray};
      cursor: not-allowed;
      color: white;
    }
  `,
  confirmBtn: css`
    padding: 1.5dvh 5dvw;
    font-size: 1.2rem;
    color: white;
    background-color: ${colors.green};
    border: none;
    border-radius: 5px;
    cursor: pointer;
  `,
  entryBtn: css`
    width: 45dvw;
    height: 5dvh;
    background-color: ${colors.orange};
    color: white;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
  `,
  updateBtn: css`
    width: 15dvw;
    height: 4dvh;
    background-color: ${colors.orange};
    color: white;
    font-size: 0.8rem;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
  `,
  typeBtn: css`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    margin: 0 10px;
    background-color: ${({ active }) => (active ? colors.green : 'white')};
    color: ${({ active }) => (active ? 'white' : 'black')};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;

    img {
      margin-right: 2vw;
      width: 6vw;
      height: auto;
    }

    &:hover {
      background-color: ${colors.green};
      color: white;
    }
  `,

};

export const StyledButton = styled.button`
  ${({ variant }) => buttonStyles[variant]}
`;
