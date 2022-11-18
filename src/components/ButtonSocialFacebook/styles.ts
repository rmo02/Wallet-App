import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";
import { FontAwesome } from '@expo/vector-icons';

export const Button = styled(RectButton)`
    width: ${RFValue(130)}px;
    height: ${RFValue(60)}px;
    border-radius: ${RFValue(5)}px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 16px;
    box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);
    background-color: ${({ theme }) => theme.COLORS.BLUE};
    margin-right: ${RFValue(10)}px;

`;

export const IconFacebook = styled(FontAwesome)`
   font-size: ${RFValue(25)}px;
   color: ${({ theme }) => theme.COLORS.WHITE};

`;

export const Title = styled.Text`
   font-size: ${RFValue(17)}px;
   margin-left: ${RFValue(10)}px;
   color: ${({ theme }) => theme.COLORS.WHITE};
   font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;
