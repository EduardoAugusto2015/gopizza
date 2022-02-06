import React from "react";
import HappyEmoji from '@assets/happy.png';
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useTheme } from 'styled-components/native';
import { 
    Container, 
    Header,
    Greeting,
    GreetingEmoji,
    GreetingText,
    MenuHeader,
    MenuItemsNumber,
    Title,
 } from "./styles";
import { Search } from '@components/Search';

export function Home (){
    const {COLORS} = useTheme();
    
    return (
        <Container>
            <Header>
                <Greeting>
                    <GreetingEmoji source={HappyEmoji}/>
                    <GreetingText>Olá, Admin</GreetingText>
                </Greeting>
                <TouchableOpacity>
                    <MaterialIcons name="logout" color={COLORS.TITLE} size={24}/>
                </TouchableOpacity>
            </Header>
            <Search onSearch={()=>{}} onClear={()=>{}}/>
            <MenuHeader>
                <Title>Cardápio</Title>
                <MenuItemsNumber>10 pizzas</MenuItemsNumber>
            </MenuHeader>
        </Container>
    );
}