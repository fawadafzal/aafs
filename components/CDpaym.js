import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';



export default class CDpaym extends React.Component {
    render() {

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Header                                    //HEADER 
                        leftComponent={{ icon: 'menu', color: '#fff', padding: 10 }}
                        centerComponent={{ text: 'CHOP HOUSE EVOLUTION', style: { color: '#fff', fontSize: 18, } }}
                        rightComponent={{ icon: 'home', color: '#fff', padding: 10 }}
                    />


                    <Text style={{ fontWeight: "bold", fontSize: 18, textAlign: 'center' }}> PAYMENT: </Text>
                    <Text> </Text>
                    <Text> </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 18, textAlign: 'center' }}> TABLE NO:     2 </Text>
                    <Text> </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 18, textAlign: 'center' }}> ORDER NO:     1101 </Text>
                    <Text> </Text>
                    <Text> </Text>
                    <Text> </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 18, textAlign: 'center', color: "red" }}> YOUR PAYMENT IS: RS 1728.9 </Text>
                    <Text> </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 18, textAlign: 'center' }}> PAYMENT METHOD: </Text>
                    <Text> </Text>
                    <CheckBox
                        //CHECKBOX
                        title='CASH'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.true}
                    />
                    <Text> </Text>
                    <CheckBox
                        //CHECKBOX
                        title='CARD'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={true}
                    />
                    <Text> </Text>
                    <Text> </Text>

                    <Button title=' CHEF SCREEN  '
                        onPress={() =>
                            this.props.navigation.navigate('Home')} />
                    <Text> </Text>
                    <Text> </Text>


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


