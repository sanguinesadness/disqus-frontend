import Colors from 'constants/colors';
import { FLEX_CENTERED } from 'constants/mixins';
import styled from 'styled-components';

interface IconProps {
  size: number;
}

export const Icon = styled.div<IconProps>`
  ${FLEX_CENTERED()}
  height: ${props => props.size}px;
  width: 100%;
`;

export const Label = styled.div`
  font-weight: 400;
  font-size: 1.2em;
  margin-top: 25px;
  width: 100%;
  text-align: center;
  color: ${Colors.TEAL};
`;