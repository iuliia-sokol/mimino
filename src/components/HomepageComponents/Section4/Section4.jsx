import { Box } from 'components/Box';
import { ButtonStandart } from 'components/Buttons/ButtonStandart/ButtonStandart';
import { Slider } from 'components/Swiper/Swiper';
import { sectionSlider4 } from '../../../utils/homepageImages';
import {
  Section4Wrapper,
  DataWrapper,
  SubHeader,
  Header,
  Data,
  SliderWrapper,
  SliderButtonWrapper,
  BtnsWrapper,
} from './Section4.styled';

export const Section4 = () => {
  return (
    <Section4Wrapper>
      <Box
        pr={['15px', '47px', '85px']}
        pl={['15px', '47px', '85px']}
        display="flex"
        flexDirection="column"
      >
        <DataWrapper>
          <Header>MIMIHO</Header>
          <SubHeader>Ресторан</SubHeader>
          <Data>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </Data>
        </DataWrapper>
        <SliderButtonWrapper>
          <BtnsWrapper>
            <ButtonStandart text="Забронювати столик"></ButtonStandart>
            <ButtonStandart text="Переглянути меню"></ButtonStandart>
          </BtnsWrapper>
          <SliderWrapper>
            <Slider
              images={sectionSlider4}
              background="light"
              size="large"
              reverse={true}
            />
          </SliderWrapper>
        </SliderButtonWrapper>
      </Box>
    </Section4Wrapper>
  );
};