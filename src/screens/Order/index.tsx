import React, { useState } from "react";
import { Platform } from "react-native";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { ButtonBack } from "@components/ButtonBack";
import { RadioButton } from "@components/RadioButton";

import { PIZZA_TYPES } from "@utils/pizzaTypes";

import { 
    Container, 
    Header,
    Photo ,
    Sizes,
    Form,
    Title,
    Label,
    InputGroup,
    Price,
    FormRow,
    ContentScroll,
} from './styles'
import { ScrollView } from "react-native-gesture-handler";

export function Order (){
    const [size, setSize] = useState('');
    return (
        <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <ContentScroll>
                <Header>
                    <ButtonBack 
                        oPress={()=>{}}
                        style={{ marginBottom: 108 }}
                    />
                </Header>
                <Photo source={{uri: 'https://firebasestorage.googleapis.com/v0/b/gopizzaapp-8525a.appspot.com/o/pizzas%2F1644174662915.png?alt=media&token=b4c6e475-1ecf-484c-9769-172dc62e839c'}}/>
                <Form>
                    <Title>Nome da pizza</Title>
                    <Sizes>
                    {
                        PIZZA_TYPES.map((
                            item: { id: string; name: string; }) => (
                            <RadioButton
                                onPress={()=> setSize(item.id)}
                                key={item.id}
                                title={item.name}
                                selected={size === item.id}
                            />
                        ))
                    }
                    </Sizes>
                    <FormRow>
                        <InputGroup>
                            <Label>Número da mesa</Label>
                            <Input keyboardType="numeric"/>
                        </InputGroup>
                        <InputGroup>
                            <Label>Quantidade</Label>
                            <Input keyboardType="numeric"/>
                        </InputGroup>
                    </FormRow>
                    <Price>Valor de R$00,00</Price>
                    <Button title="Confirmar pedido"/>
                </Form>
            </ContentScroll>
        </Container>
    )
}