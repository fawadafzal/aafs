import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


export default class CDlunch extends React.Component {
    render() {

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Header                                    //HEADER 
                        leftComponent={{ icon: 'menu', color: '#fff', padding: 10 }}
                        centerComponent={{ text: 'CHOP HOUSE EVOLUTION', style: { color: '#fff', fontSize: 18, } }}
                        rightComponent={{ icon: 'home', color: '#fff', padding: 10 }}
                    />


                    <TextInput
                        style={styles.input}
                        style={{ fontWeight: "bold", fontSize: 18, textAlign: 'center' }}
                        placeholder=' FOOD MENU' />

                    <Text> </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 18, textAlign: 'center' }}> Food Type  </Text>

                    <Text> </Text>




                    <Text> </Text>
                    <Button title='   LUNCH    ' />
                    <Text> </Text>

                    <Text> </Text>
                    <Text style={{ fontWeight: "bold",fontSize: 16 }}>ITEM                                 PRICE</Text>
                    <Text> </Text>
                    <Text>FRIED RICE                            RS 150 </Text>
                    <CheckBox
                        //CHECKBOX
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.true}
                    />
                    <Text> </Text>
                    <Text style={{ textAlign: 'justify' }}>LASSI                                 RS 50 </Text>
                    <CheckBox                                   //CHECKBOX

                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.true}
                    />
                    <Text> </Text>
                    <Text>TEA                                 RS 30 </Text>
                    <CheckBox                                   //CHECKBOX

                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.true}
                    />
                    <Text> </Text>
                    <Text>MUTTON KARRAHI           RS 1300 </Text>
                    <CheckBox                                   //CHECKBOX

                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={true}
                    />
                    <Text> </Text>
                    <Text>CHICKEN KARRAHI             RS 1100 </Text>
                    <CheckBox                                    //CHECKBOX

                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.true}
                    />
                    <Text> </Text><Text> </Text><Text> </Text>
                    <Input

                        placeholder='ADDITIONAL COMMENTS'
                        shake={true}
                    />

                    <Text> </Text><Text> </Text>

                  
                    <Text> </Text><Text> </Text>
                    <Button title='   ADD TO CART   '
                        onPress={() =>
                            this.props.navigation.navigate('CDatc')} />
                    <Text> </Text>
                    <Text> </Text>
                    <Button title='   CANCEL   '
                     onPress={() =>
                        this.props.navigation.navigate('CDHome')}   />



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


