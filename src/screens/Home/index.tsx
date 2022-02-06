import React, {useEffect} from "react";
import HappyEmoji from '@assets/happy.png';

import firestore from "@react-native-firebase/firestore";

import { MaterialIcons } from "@expo/vector-icons";
import { Alert, TouchableOpacity } from "react-native";
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
import { ProductCard, ProductProps } from '@components/ProductCard';

export function Home (){
    const { COLORS } = useTheme();
    
    function fetchPizzas(value: string){
        const formattedValue = value.toLocaleLowerCase().trim();

        firestore()
        .collection('pizzas')
        .orderBy('name_insensitive')
        .startAt(formattedValue)
        .endAt(`${formattedValue}\uf8ff`)
        .get()
        .then(response => {
            const data = response.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            }) as ProductProps[];   
            console.log(data);
        })
        .catch(()=> Alert.alert('Consulta', 'Não foi possivel realizar a consulta'))
    }

    useEffect(()=>{
        fetchPizzas('');
    }, [])

    
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
            <ProductCard data={
                {
                    id: '1',
                    name: 'Pizza',
                    description: 'Sabores da pizza bla bla bla',
                    photo_url:'data:image/jpeg;base64,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',
                }
            }/>
        </Container>
    );
}