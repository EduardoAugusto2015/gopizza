import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
    Container,
    Image,
    Name,
    Description,
    StatusContainer,
    StatusLabel,
    StatusTypesProps
} from "./styles"

type Props = TouchableOpacityProps & {
    index: number;
}

export function OrderCard({index, ...rest}: Props){
    
    return(
        <Container index={index} {...rest}>
            <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/gopizzaapp-8525a.appspot.com/o/pizzas%2F1644174662915.png?alt=media&token=b4c6e475-1ecf-484c-9769-172dc62e839c'}}/>
            
            <Name>
                Quatro queijos
            </Name>
            
            <Description>
                Mesa 5 ● Qnt: 1 
            </Description>
            <StatusContainer status="Preparando">
                <StatusLabel status="Preparando">
                    Preparando
                </StatusLabel>
            </StatusContainer>
        </Container>
    );
}