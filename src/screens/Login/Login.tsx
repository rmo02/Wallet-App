import React from "react";
import { SafeAreaView } from "react-native";
import {
   Container,
   ContentHeader,
   ContentBody,
   ContentFooter,
   Title,
   Description,
   ViewButton,
} from "./styles";
import { ButtonSocialGoogle } from '../../components/ButtonSocialGoogle/ButtonSocialGoogle';
import { ButtonSocialFacebook } from '../../components/ButtonSocialFacebook/ButtonSocialFacebook';


const Login: React.FC = () => {
   return (
      <SafeAreaView>
         <Container>
            <ContentHeader>
               <Title> Seja bem vindo(a) {"\n"} a Wallet App</Title>

               <Description>Entrar com redes sociais</Description>

               <ViewButton>
                  <ButtonSocialGoogle title="Google"/>

                  <ButtonSocialFacebook iconName="facebook" title="Facebook"/>

               </ViewButton>
            </ContentHeader>

            <ContentBody></ContentBody>

            <ContentFooter></ContentFooter>
         </Container>
      </SafeAreaView>
   );
};

export { Login };
