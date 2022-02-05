import React from "react";
import HappyEmoji from '@assets/happy.png';
import { MaterialIcons } from "@expo/vector-icons"
import { BorderlessButton } from "react-native-gesture-handler";
import { useTheme } from 'styled-components/native';
import { 
    Container, 
    Header,
    Greeting,
    GreetingEmoji,
    GreetingText,
 } from "./styles";

export function Home (){
    const {COLORS} = useTheme();
    return (
        <Container>
            <Header>
                <Greeting>
                    <GreetingEmoji source={HappyEmoji}/>
                    <GreetingText>Olá, Admin</GreetingText>
                </Greeting>
                <BorderlessButton>
                    <MaterialIcons name="logout" color={COLORS.TITLE} size={24}/>
                </BorderlessButton>
            </Header>
        </Container>
    )
}