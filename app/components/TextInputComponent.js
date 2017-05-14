import React, { Component } from 'react';
import {
    View,
    TextInput,
    Text
} from 'react-native';
import Output from '../components/Output';

class TextInputComponent extends Component {

    render(){
        return(
        <View>
            <TextInput
                style={{ fontSize: 20, textAlign: 'center' }}
                placeholder="Укажите сумму валюты конвертации"
                onChangeText={ (text) => this.props.cha(text) }
                keyboardType="numeric"
            />
        </View>
        );
    }
}

export default TextInputComponent;