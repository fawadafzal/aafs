import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView,TouchableHighlight } from 'react-native';
import { Header, Button } from 'react-native-elements';
import Chef from './Chef'


export default class Home extends React.Component {
    render() {

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Header
                        leftComponent={{ icon: 'menu', color: '#fff', padding: 10 }}
                        centerComponent={{ text: 'CHOP HOUSE EVOLUTION', style: { color: '#fff', fontSize: 18, } }}
                        rightComponent={{ icon: 'home', color: '#fff', padding: 10 }}
                    />



                    <Text> </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Order Status  </Text>

                    <Text> </Text>
                    <Text> </Text>

                    <TextInput
                        style={styles.input}
                        placeholder='Order No:   001'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Table No:   01'
                    />
                    <Text style={{ fontWeight: "bold" }}>NAME                                                 QTY </Text>

                    <Text> </Text>

                    <Text>CHICKEN KARRAHI HALF                 1 </Text>
                    <Text>MUTTON KARRAHI HALF                 1 </Text>
                    <Text>DEAL1                                                   1 </Text>
                    <Text>ADDITIONAL COMMENTS:                   </Text>

                  
                    
                    

  <Button title='Ready'
                    onPress={() =>
                        this.props.navigation.navigate('Chef')}  
                    />

                    <Text> </Text>
                    <Text> </Text>
                    <Text> </Text>

                    <TextInput
                        style={styles.input}
                        placeholder='Order No:   002 '
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Table No:   02 '
                    />
                    <Text style={{ fontWeight: "bold" }}>NAME                                                 QTY </Text>

                    <Text> </Text>

                    <Text>ZINGER BURGER CHEESE                 1 </Text>
                    <Text>BEEF BURGER CHEESE                      1 </Text>
                    <Text>DEAL 7                                                   1 </Text>
                    <Text>ADDITIONAL COMMENTS:                   </Text>


                    <Text> </Text>
                    <Button title='Ready' />

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
        //  justifyContent: 'center',

    },


});


