import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin-inline: auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  margin: 10px auto;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  line-height: 60px;

  background-color: ${($isSelected) => ($isSelected ? "pink" : "darkcyan")};
  transition: all 0.3s ease-out;

  &:hover,
  :active {
    opacity: 0.7;
    transform: scale(1.1);
  }
  span {
    color: purple;
  }
  /* POINT メディアクエリ */
  @media (max-width: 600px) {
    border-radius: 0;
  }

  :global {
    background-color: black;
  }
`;

const StyledSubButton = styled(StyledButton)`
  background-color: ${({ $isSelectedSub }) =>
    $isSelectedSub ? "crimson" : "coral"};
`;

const StyledOliveButton = styled(StyledButton)`
  background-color: olive;
`;

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isSelectedSub, setIsSelectedSub] = useState(false);

  const onClickHandler = () => setIsSelected(!isSelected);
  const onClickSubHandler = () => setIsSelectedSub(!isSelectedSub);

  return (
    <>
      <StyledButton $isSelected={isSelected} onClick={onClickHandler}>
        ボタン
      </StyledButton>
      <StyledSubButton
        $isSelectedSub={isSelectedSub}
        onClick={onClickSubHandler}
      >
        サブボタン
      </StyledSubButton>
      <StyledOliveButton>
        <span>オリーブ</span>
      </StyledOliveButton>
    </>
  );
};

export default Example;
