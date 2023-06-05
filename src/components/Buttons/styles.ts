// primaryButton.ts
import { STATUS_COLORS, StatusColor, StatusProps } from '@/styles/global';
import styled from 'styled-components';

const ButtonBase = styled.button<StatusProps>`
  font-size: 1rem;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  grid-area: ${({ gridArea }) => gridArea || 'initial'};
`;

export const PrimaryButton = styled(ButtonBase)`
  background-color: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  color: ${(props) => getTextColor(props.theme, props.statusColor)};
  border: none;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

const getTextColor = (theme: any, statusColor: StatusColor) => {
  const backgroundColor = theme[STATUS_COLORS[statusColor]];
const darkTextBackgrounds = [theme['light'], theme['lightGray'], theme['gray-100']];

  return darkTextBackgrounds.includes(backgroundColor)
  ? "#495057"
    : "#FFFFFF";
};
