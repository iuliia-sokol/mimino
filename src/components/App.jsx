import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonLarge } from './Buttons/ButtonLarge/ButtonLarge';
import { ButtonModal } from './Buttons/ButtonModal/ButtonModal';

import { ButtonStandart } from './Buttons/ButtonStandart/ButtonStandart';

const Text = styled.p`
  font-family: ${p => p.theme.fonts.logo};
`;

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Text>
            StartPage
            <ButtonStandart text="standart"></ButtonStandart>
            <ButtonLarge text="large"></ButtonLarge>
            <ButtonModal text="modal"></ButtonModal>
          </Text>
        }
      ></Route>
    </Routes>
  );
};
