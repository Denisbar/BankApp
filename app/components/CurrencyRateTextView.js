import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class CurrencyRateTextView extends React.Component {
    render(){
        return(
            <View style={{flex:1, flexDirection:'column'}}>
              <Text style={styles.fontsUSD}>{(parseFloat((this.props.baseUSD)).toFixed(3))} <Text style={{fontSize: 17}}>USD</Text></Text>
              <Text style={styles.fontsEUR}>{(parseFloat((this.props.baseEUR)).toFixed(3))} <Text style={{fontSize: 17}}>EUR</Text></Text>
              <Text style={styles.fontsRU}>{(parseFloat((this.props.baseRU)).toFixed(3))} <Text style={{fontSize: 17}}>RU</Text></Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    fontsUSD: {
        fontSize: 19,
        top: 35,
        fontWeight: 'bold'
    },
    fontsEUR: {
        fontSize: 19,
        top: 100,
        fontWeight: 'bold'
    },
    fontsRU: {
        fontSize: 19,
        top: 170,
        fontWeight: 'bold'
    },
});