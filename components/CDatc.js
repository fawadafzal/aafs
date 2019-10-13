import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';



export default class CDatc extends React.Component {
    render() {

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Header                                    //HEADER 
                        leftComponent={{ icon: 'menu', color: '#fff', padding: 10 }}
                        centerComponent={{ text: 'CHOP HOUSE EVOLUTION', style: { color: '#fff', fontSize: 18, } }}
                        rightComponent={{ icon: 'home', color: '#fff', padding: 10 }}
                    />
                    <Text> </Text>

                    <Text style={{ fontWeight: "bold", fontSize: 18, textAlign: 'center' }}> ORDER DETAILS </Text>
                    <Text> </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 18, textAlign: 'center' }}> TABLE NO:     2 </Text>
                    <Text> </Text>
                    <Text> </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}> SERIAL                       NAME           QTY       PRICE   </Text>
                    <Text> </Text>
                    <Text> </Text>

                    <Text>    1                   MUTTON KARRAHI         1            RS 1300    </Text>
                    <Text>  2                   SAADDA PARATHA         1            RS 30      </Text>
                    <Text>   3                   BEHAARI KABAAB           1            RS 200     </Text>
                    <Text> </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}> TOTAL          RS 1530    </Text>

                    <Text> </Text>
                    <Text> </Text>
                    <Text> </Text>
                    <Button title='   UPDATE ORDER   ' 
                     onPress={() =>
                        this.props.navigation.navigate('CDHome')}  />
                    <Text> </Text>
                    <Text> </Text>
                    <Button title='   CANCEL ORDER  '
                     onPress={() =>
                        this.props.navigation.navigate('CDHome')}   />
                    <Text> </Text>
                    <Text> </Text>
                    <Text style={{ fontWeight: "bold" }}> SUB TOTAL:     RS 1530 </Text>
                    <Text style={{ fontWeight: "bold" }}>  SALES TAX (13%)   RS 198.9 </Text>
                    <Text style={{ fontWeight: "bold" }}>  TOTAL    RS 1728.9 </Text>

                    <Text> </Text>
                    <Text> </Text>
                    <Text> </Text>
                    <Button title='   PROCEED TO CHECKOUT   ' 
                    onPress={() =>
                        this.props.navigation.navigate('CDpaym')}  />



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


