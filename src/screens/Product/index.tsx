import React, { useState } from 'react';
import { Platform, TouchableOpacity, ScrollView, Alert } from 'react-native';

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
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [prizeSizeP, setPrizeSizeP] = useState('');
    const [prizeSizeM, setPrizeSizeM] = useState('');
    const [prizeSizeG, setPrizeSizeG] = useState('');
    const [isLoading, setIsloading] = useState(false);

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

    async function handleAdd() {
        if(!name.trim()){
            return Alert.alert('Cadastro', 'Informe o nome da pizza.')
        }
        if(!description.trim()){
            return Alert.alert('Cadastro', 'Informe a descrição da pizza.')
        }
        if(!image){
            return Alert.alert('Cadastro', 'Selecione a imagem.')
        }
        if(!prizeSizeP || !prizeSizeM || !prizeSizeG){
            return Alert.alert('Cadastro', 'Informe todos os tamanhos da pizza.')
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
                        <Input onChangeText={setName} value={name}/>
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
                        onChangeText={setDescription} 
                        value={description}
                    />
                    <InputGroup>
                        <Label>Tamanhos e preço</Label>

                        <InputPrice size="P" onChangeText={setPrizeSizeP} value={prizeSizeP}/>
                        <InputPrice size="M" onChangeText={setPrizeSizeM} value={prizeSizeM}/>
                        <InputPrice size="G" onChangeText={setPrizeSizeG} value={prizeSizeG}/>
                        <Button
                            title="Cadastrar pizza"
                            isLoading={isLoading}
                            onPress={handleAdd}
                        />
                    </InputGroup>
                </Form>
            </ScrollView>
        </Container>
    );
}