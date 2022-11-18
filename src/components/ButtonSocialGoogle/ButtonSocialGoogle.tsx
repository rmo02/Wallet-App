import React from 'react'
import { Button, IconGoogle, Title } from './styles';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import SvgGoogle from '../../assets/google.png';

interface Props extends RectButtonProps {
   title: string
}

const ButtonSocialGoogle: React.FC<Props> = ({ title, ...rest }) => {
  return (
   <Button {... rest}>
      <IconGoogle
      source={SvgGoogle} resizeMode='contain'/>
      <Title>{title}</Title>
   </Button>
  )
}

export {ButtonSocialGoogle};
