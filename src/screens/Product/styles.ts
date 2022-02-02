import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { getBottomSpace } from 'react-native-iphone-x-helper';
export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled(LinearGradient).attrs(({theme}) => ({
    colors: theme.COLORS.GRADIENT
}))`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: ${getBottomSpace() + 33}px 20px 24px;
`;

export const Title = styled.Text`
    font-size: 24px;
    ${({ theme }) => css `
        font-family: ${theme.FONTS.TITLE};
        color: ${theme.COLORS.TITLE}
    `}
`;

export const TouchableOpacity = styled.TouchableOpacity``;

export const DeleteLabel = styled.Text`
    font-size: 14px;
    ${({ theme }) => css `
        font-family: ${theme.FONTS.TEXT};
        color: ${theme.COLORS.TITLE}
    `}
`;