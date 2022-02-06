import React from "react";
import { Platform } from "react-native";
import { ButtonBack } from "@components/ButtonBack";
import { 
    Container, 
    Header,
    Photo 
} from './styles'

export function Order (){
    return (
        <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Header>
                <ButtonBack 
                    oPress={()=>{}}
                    style={{ marginBottom: 108 }}
                />
            </Header>
            <Photo source={{uri: 'https://firebasestorage.googleapis.com/v0/b/gopizzaapp-8525a.appspot.com/o/pizzas%2F1644174662915.png?alt=media&token=b4c6e475-1ecf-484c-9769-172dc62e839c'}}/>
        </Container>
    )
}