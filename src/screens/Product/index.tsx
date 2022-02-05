import React, { useState } from 'react';
import { Platform, TouchableOpacity, ScrollView, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

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

        const fileName = new Date().getTime();
        const reference = storage().ref(`/pizzas/${fileName}.png`);
        
        await reference.putFile(image);
        const photo_url = await reference.getDownloadURL();

        setIsloading(true);

        firestore()
        .collection('pizzas')
        .add({
            name,
            name_insensitive: name.toLowerCase().trim(),
            description,
            prices_sizes: {
                p: prizeSizeP,
                m: prizeSizeM,
                g: prizeSizeG
            },
            photo_url:photo_url,
            photo_path: reference.fullPath
        })
        .then(() => Alert.alert('Cadastro', 'Pizza cadastrada com sucesso.'))
        .catch(() => Alert.alert('Cadatro', 'Não foi possível cadastrar a pizza.'));
    
        setIsloading(false);
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