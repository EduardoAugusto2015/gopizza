import React from "react";

import {Container, Header, Title} from './styles';
import { FlatList } from "react-native";

import { OrderCard } from "@components/OrderCard";

export function Orders(){
    return(
        <Container>
            <Header>
                <Title>
                    Pedidos feitos
                </Title>
            </Header>
            <FlatList
                data={['1','2','3']}
                keyExtractor={item=>item}
                renderItem={({item, index}) =>(
                    <OrderCard index={index}/>   
                )}
            />
        </Container>
    )
}