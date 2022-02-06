import React from "react";
import { Platform } from "react-native";
import { ButtonBack } from "@components/ButtonBack";
import { Container, Header } from './styles'

export function Order (){
    return (
        <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Header>
                <ButtonBack 
                    oPress={()=>{}}
                    style={{ marginBottom: 108 }}
                />
            </Header>
        </Container>
    )
}