import React, {useEffect, useState} from "react";
import HappyEmoji from '@assets/happy.png';

import firestore from "@react-native-firebase/firestore";

import { MaterialIcons } from "@expo/vector-icons";
import { Alert, TouchableOpacity, FlatList } from "react-native";
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

    const [pizzas, setPizzas] = useState<ProductProps>([]);
    
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
            setPizzas(data);
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

            <FlatList
                data={pizzas}
                keyExtractor={item=> item.id}
                renderItem={({item}) => <ProductCard data={item}/>}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: 20,
                    paddingBottom: 125,
                    marginHorizontal: 24
                }}
            />

            
        </Container>
    );
}