import React, { useState } from 'react';
import { Platform, TouchableOpacity } from 'react-native';

import { 
    Container, 
    Header,
    Title,
    DeleteLabel,
    Upload,
    PickImageButton
} from './styles';
import * as ImagemPicker from 'expo-image-picker';
import { ButtonBack } from '@components/ButtonBack';
import { InputPrice } from '@components/InputPrice';

import { Photo } from '@components/Photo';

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
            <InputPrice size="P"/>
            <InputPrice size="M"/>
            <InputPrice size="G"/>
        </Container>
    );
}