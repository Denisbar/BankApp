import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert,
} from 'react-native';

let currency = 'UAH';

class Output extends Component {
    
    
    nanCheck(text, val){
        if(text == 0){
            return "- - -";
        }else{
            if(!(isNaN(text))){
            return (parseFloat((text)
                        .replace(',','.')
                        .replace(' ',''))
                        .toFixed(3)) * val;
            }else{
                return "Not a number";
            }
        }
    }

    render(){
        return(
            <View style={{flex:1, flexDirection:'column'}}>
                <Text style={styles.fontsUSD}> 
                    {(this.nanCheck(this.props.text, this.props.baseUSD.buy))} <Text style={{fontSize: 17}}>{currency}</Text>
                </Text>
                <Text style={styles.fontsEUR}> 
                    {(this.nanCheck(this.props.text, this.props.baseEUR.buy))} <Text style={{fontSize: 17}}>{currency}</Text>
                </Text>
                <Text style={styles.fontsRU}> 
                    {(this.nanCheck(this.props.text, this.props.baseRU.buy))} <Text style={{fontSize: 17}}>{currency}</Text>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
     fontsUSD: {
        fontSize: 19,
        top: 33,
        fontWeight: "bold"
    },
    fontsEUR: {
        fontSize: 19,
        top: 98,
        fontWeight: "bold"
    },
    fontsRU: {
        fontSize: 19,
        top: 166,
        fontWeight: "bold"
    },
});

export default Output;