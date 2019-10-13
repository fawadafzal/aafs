import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { Header, Button } from 'react-native-elements';

import CDdinner from './cddinner'
import CDlunch from './cdlunch'
import CDbreakfast from './cdbreakfast'

export default class CDHome extends React.Component {
    render() {

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Header
                        leftComponent={{ icon: 'menu', color: '#fff', padding: 10 }}
                        centerComponent={{ text: 'CHOP HOUSE EVOLUTION', style: { color: '#fff', fontSize: 18, } }}
                        rightComponent={{ icon: 'home', color: '#fff', padding: 10 }}
                    />


                    <TextInput
                        style={styles.input}
                        style={{ fontWeight: "bold", fontSize: 18, textAlign: 'center' }}
                        placeholder=' FOOD MENU' />
                   


                    <Text> </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 18, textAlign: 'center' }}>Please Select Food Type  </Text>

                    <Text> </Text>
                    <Text> </Text>

                    <Text> </Text>

                    <Button title='DINNER' 
                       onPress={() =>
                        this.props.navigation.navigate('cddinner')}  
                    />



                    <Text> </Text>
                    <Button title='LUNCH' 
                       onPress={() =>
                        this.props.navigation.navigate('cdlunch')}  
                    />
                    <Text> </Text>

                    <Text> </Text>
                    <Button title='BREAKFAST' 
                       onPress={() =>
                        this.props.navigation.navigate('cdbreakfast')}  
                    />

                </View>
            </ScrollView>
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


});


