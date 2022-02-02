import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';

import { 
    Container, 
    Header,
    Title,
    DeleteLabel,
    Upload,
    PickImageButton
} from './styles';
import { ButtonBack } from '@components/ButtonBack';
import { Photo } from '@components/Photo';

export function Product(){
    return(
        <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Header>
                <ButtonBack/>

                <Title>Cadastrar</Title>
                <TouchableOpacity>
                    <DeleteLabel>Deletar</DeleteLabel>
                </TouchableOpacity>
            </Header>
            <Upload>
                <Photo uri=""/>
                <PickImageButton title="Carregar" type="secondary"/>
            </Upload>

        </Container>
    );
}