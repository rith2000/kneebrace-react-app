import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.buttonStyle}>
            <TouchableOpacity 
                    style={styles.heatingButton}
                    onPress={() =>
                        this.props.navigation.navigate('Heating')
                    }>
                    <Text style={styles.buttonText}>HEATING</Text>
                </TouchableOpacity>
        </View>
        
        <View style={styles.buttonStyle}>
            <TouchableOpacity 
                style={styles.coolingButton}
                onPress={() =>
                    this.props.navigation.navigate('Cooling')
                }>
                <Text style={styles.buttonText}>COOLING</Text>
            </TouchableOpacity>
            
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heatingButton: {
    width: 215,
    height: 215,
    backgroundColor: '#01aae1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  coolingButton: {
    width: 215,
    height: 215,
    backgroundColor: '#f59203',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5%'
  },
  buttonText: {
    alignItems: 'center',
    fontSize: 40,
    color: 'white',
    justifyContent: 'center'
  } 
});