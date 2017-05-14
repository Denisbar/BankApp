import React, {Component} from 'react';
import { AppRegistry, View, Image } from 'react-native';

class DisplayImage extends Component {
    render(){
        return(
          <View
            style={{
                flex: 0.7,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                height: 300,
            }}
          >
            <Image
                style={{width: 50, height: 50, top: 25, left: 10}}
                source={require('../images/us.png')}
                />
            <Image
                style={{width: 50, height: 50, top: 65, left: 10}}
                source={require('../images/eu.png')}
                />
            <Image
                style={{width: 50, height: 50, top: 110, left: 10}}
                source={require('../images/rus.png')}
                />        
          </View>  
        );
    }
}

export default DisplayImage;