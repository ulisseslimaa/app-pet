import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
 } from 'react-native';

 import * as Animatable from 'react-native-animatable'

export default function Welcome() {
 return (
    <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Animatable.Image
            animation='flipInY'
            source={require('../../assets/pata.png')}
            style={{width: '60%'}}
            resizeMode='contain'
        />
        </View> 

        <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Ajude as OGNs protetoras de animais da cidade de Picos</Text>
            <Text style={styles.text}>Faça o login para começar</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </Animatable.View>
    </View>
 );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F29D35'
    },
    containerLogo:{
        flex:2,
        backgroundColor:'#F29D35',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12
    },
    text:{
        color:'#a1a1a1'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#F29D35',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    }
})