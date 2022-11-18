import React from 'react'
import { Button, IconFacebook, Title } from './styles';
import { RectButtonProps } from 'react-native-gesture-handler'
import { FontAwesome } from '@expo/vector-icons';



interface Props extends RectButtonProps {
   title: string;
   iconName: React.ComponentProps<typeof FontAwesome>["name"]
}

const ButtonSocialFacebook: React.FC<Props> = ({ title, iconName, ...rest }) => {
  return (
   <Button {...rest}>
      <IconFacebook name={iconName}/>
      <Title>{title}</Title>
   </Button>
  )
}

export {ButtonSocialFacebook};
