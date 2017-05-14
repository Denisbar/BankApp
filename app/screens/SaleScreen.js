import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  TouchableOpacity,
  Vibration,
} from 'react-native';

import { ScrollView } from 'react-native';
import DisplayImage from '../components/Images';
import TextInputComponent from '../components/TextInputComponent.js';
import CurrencyRateTextView from '../components/CurrencyRateTextView.js';
import Output from '../components/Output';

export default class SaleScreen extends React.Component {
  static navigationOptions = {
    title: 'Продажа / UA',
    headerTintColor: '#0033cc'
  };

   constructor(){
    super();
    this.state = {
      baseEUR: '',
      baseUSD: '',
      baseRU: '',
      baseEURsale: '',
      baseUSDsale: '',
      baseRUsale: '',
      text: '',
    };
  }

  componentDidMount(){
    this.getRates();
  }

  getRates(){
    let currencyURL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
      return fetch(currencyURL)
              .then((response) => response.json())
              .then((response) =>{
                this.setState({baseEUR: response[0]});
                this.setState({baseRU: response[1]});
                this.setState({baseUSD: response[2]});
                this.setState({baseUSDsale: response[2]});
                this.setState({baseEURsale: response[0]});
                this.setState({baseRUsale: response[1]});
              });
  }

  cha(text){
      return this.setState({text: text});
  }

  render() {
    const { navigate } = this.props.navigation; 
    return (
        <ScrollView 
          style={{
            flex: 1,
            flexDirection: 'column',
          }}>

          <View style={{flex:1, flexDirection:'row'}}>
            <DisplayImage />
            <CurrencyRateTextView 
            baseUSD = {this.state.baseUSDsale.sale}
            baseEUR = {this.state.baseEURsale.sale}
            baseRU = {this.state.baseRUsale.sale}
            />
            <View
              style={{flex:1, flexDirection:'column'}}>
              <Output
                text={this.state.text}
                baseUSD={this.state.baseUSDsale}
                baseEUR={this.state.baseEURsale}
                baseRU={this.state.baseRUsale}
                cha = {this.cha.bind(this)}
              />
              
            </View>
          </View>

          <TextInputComponent
                text={this.state.text}
                baseEUR={this.state.baseUSDsale}
                cha = {this.cha.bind(this)}
              />
          
            <TouchableOpacity
              style={{height: 50, marginTop: 10, backgroundColor: '#0033cc'}}
              onPress={() => {
                navigate('Home')
                Vibration.vibrate([0, 30, 20, 30])
            }}>    
                <Button
                onPress={() => {
                  navigate('Home')
                  Vibration.vibrate([0, 30, 20, 30])
                }}
                title="ИЗМЕНИТЬ КОНВЕРТАЦИЮ"
                color="#0033cc"/>
            </TouchableOpacity>
        </ScrollView>
    );
  }
}