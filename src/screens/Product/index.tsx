import React, { useState } from 'react';
import { Platform, TouchableOpacity, ScrollView } from 'react-native';

import { 
    Container, 
    Header,
    Title,
    DeleteLabel,
    Upload,
    PickImageButton,
    Form,
    Label,
    InputGroup,
    InputGroupHeader,
    MaxCharecters
} from './styles';
import * as ImagemPicker from 'expo-image-picker';
import { ButtonBack } from '@components/ButtonBack';
import { InputPrice } from '@components/InputPrice';
import { Input } from '@components/Input';
import { Photo } from '@components/Photo';
import { Button } from '@components/Button';

export function Product(){

    const [image, setImage] = useState('');

    async function hangleImagePicker() {
        const { status } = await ImagemPicker.requestMediaLibraryPermissionsAsync();
        
        if(status === 'granted'){
            const result = await ImagemPicker.launchImageLibraryAsync({
                mediaTypes: ImagemPicker.MediaTypeOptions.Images,
                aspect: [4, 4]
            });

            if(!result.cancelled){
                setImage(result.uri);
            }
        }
    }

    return(
        <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header>
                    <ButtonBack/>

                    <Title>Cadastrar</Title>
                    <TouchableOpacity>
                        <DeleteLabel>Deletar</DeleteLabel>
                    </TouchableOpacity>
                </Header>
                <Upload>
                    <Photo uri={image}/>
                    <PickImageButton 
                        onPress={hangleImagePicker}
                        title="Carregar" 
                        type="secondary"
                    />
                </Upload>
                <Form>
                    <InputGroup>
                        <Label>Nome</Label>
                        <Input />
                    </InputGroup>
                    <InputGroup>
                        <InputGroupHeader>
                            <Label>Desrição</Label>
                            <MaxCharecters>0 de 60 caracteres</MaxCharecters>
                        </InputGroupHeader>
                    </InputGroup>
                    <Input 
                        multiline
                        maxLength={60}
                        style={{ height: 80}}
                    />
                    <InputGroup>
                        <Label>Tamanhos e preço</Label>

                        <InputPrice size="P"/>
                        <InputPrice size="M"/>
                        <InputPrice size="G"/>
                        <Button
                            title="Cadastrar pizza"
                        />
                    </InputGroup>
                </Form>
            </ScrollView>
        </Container>
    );
}