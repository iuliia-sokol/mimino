import { Box } from 'components/Box';

import {
  Section1Wrapper,
  BlockWrapper,
  DataWrapper,
  ImageWrapper,
  SubHeader,
  Header,
  Data,
  SliderWrapper,
  BtnsWrapper,
  SliderBtnsWrapper,
  RoomName,
} from './Section1.styled';

import Pic1_1x from '../../../images/hotel/sec1-1-1x.jpg';
import Pic1_2x from '../../../images/hotel/sec1-1-2x.jpg';

import { sectionSlider1 } from '../../../utils/hotelImages';
import { Slider } from 'components/Swiper/Swiper';
import { ButtonStandart } from 'components/Buttons/ButtonStandart/ButtonStandart';
import { ButtonStandartNavLink } from 'components/Buttons/ButtonStandart/ButtonStandartNavLink';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

export const Section1 = () => {
  const [showModal, setShowModal] = useState(false);
  const [statusModal, setStatusModal] = useState('');

  const toggleModal = status => {
    setShowModal(!showModal);
    setStatusModal(status);
  };
  return (
    <Section1Wrapper>
      <Box
        display="flex"
        flexDirection="column"
        pr={['15px', '47px', '85px']}
        pl={['15px', '47px', '85px']}
      >
        <BlockWrapper>
          <DataWrapper>
            <SubHeader>Amet minim mollit non</SubHeader>
            <Header>MIMIHO</Header>
            <RoomName>ДВОМІСНИЙ НОМЕР люкс</RoomName>
            <Data>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Data>
          </DataWrapper>
          <ImageWrapper>
            <img
              srcSet={`${Pic1_1x} 1x, ${Pic1_2x} 2x`}
              src={Pic1_1x}
              alt="interrior"
              loading="lazy"
            />
          </ImageWrapper>
        </BlockWrapper>
        <SliderBtnsWrapper>
          <SliderWrapper>
            <Slider
              slidesPerView={[2, 2]}
              spaceBetween={[25, 40, 40]}
              images={sectionSlider1}
              position="left"
              reverse={true}
            />
          </SliderWrapper>
          <BtnsWrapper>
            <ButtonStandartNavLink to="double-lux" text="Детальніше" />
            <ButtonStandart
              text="Переглянути ціни"
              onClick={() => toggleModal('price')}
            />
          </BtnsWrapper>
        </SliderBtnsWrapper>
      </Box>
      {showModal && <Modal closeModal={toggleModal} status={statusModal} />}
    </Section1Wrapper>
  );
};
