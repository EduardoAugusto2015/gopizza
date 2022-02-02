import React from 'react';

import { Image, Placeholder, PladeholderTitle } from './styles';

type Props = {
    uri: string | null;
}

export function Photo ({ uri }: Props){    
    if(uri){
        return <Image source={{ uri }} />;
    }

    return (
        <Placeholder>
            <PladeholderTitle>Nenhuma foto{'\n'}carregada</PladeholderTitle>   
        </Placeholder>
    )
}