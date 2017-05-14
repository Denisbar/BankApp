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

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Покупка / UA',
    headerTintColor: 'green'
  };
  
   constructor(){
    super();
    this.state = {
      baseEUR: '',
      baseUSD: '',
      baseRU: '',
      baseEURsale: '',
      baseUSDsale: '',
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
            baseUSD = {this.state.baseUSD.buy}
            baseEUR = {this.state.baseEUR.buy}
            baseRU = {this.state.baseRU.buy}
            />
            <View
              style={{flex:1, flexDirection:'column'}}>
              <Output
                text={this.state.text}
                baseUSD={this.state.baseUSD}
                baseEUR={this.state.baseEUR}
                baseRU={this.state.baseRU}
                cha = {this.cha.bind(this)}
              />
            </View>
          </View>
          <TextInputComponent
            text={this.state.text}
            baseEUR={this.state.baseUSD}
            cha = {this.cha.bind(this)}/>
          <TouchableOpacity
            style={{height: 50, marginTop: 10, backgroundColor: 'green'}}
            onPress={() => {
              navigate('Sale')
              Vibration.vibrate([0, 30, 20, 30])
            }}>    
              <Button
              onPress={() => {
                navigate('Sale')
                Vibration.vibrate([0, 30, 20, 30])
              }}
              title="ИЗМЕНИТЬ КОНВЕРТАЦИЮ"
              color="green"/>
          </TouchableOpacity>
        </ScrollView>
    );
  }
}