import React from 'react';
import { StyleSheet, Text, View, Button, Slider } from 'react-native';


export default class Heating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          //Initial Value of slider
          sliderValue: 50
        };
      }

    render() {
      return (
        <View style={styles.container}>
          <Text style={{fontSize: 30}}>Choose your temperature:</Text>
          
        <Slider 
            style={{width: '100%'}}
            maximumValue={100}
            minimumValue={0}
            minimumTrackTintColor="#888888"
            maximumTrackTintColor="#888888"
            step={10}
            value={this.state.sliderValue}
            onValueChange={(sliderValue) => this.setState({ sliderValue })}
        />
        <Text style={{fontSize: 30}}>{this.state.sliderValue}</Text>
        <Button
            color = '#01aae1'
            title="Back to home page"
            onPress={() =>
              this.props.navigation.navigate('Home')
            }
          />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f59203',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });