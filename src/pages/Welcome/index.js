import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
 } from 'react-native';

export default function Welcome(){
 return(
    <View style={StyleSheet.container}>
        <View style={styles.containerLogo}>
            <Image
            source={require('../../assets/03pb_70dl_210802.jpg')}
            style={{width: '50%', height:'80%'}}
            resizeMode='contain'
            />
        </View>

        <View style={styles.containerForm}>
            <Text style={styles.title}>Ajude as OGNs protetoras de animais da cidade de Picos</Text>
            <Text style={styles.text}>Faça o login para começar</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
            
        </View>
    </View>
 );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#38a68d'
    },
    containerLogo:{
        flex:2,
        backgroundColor:'#38a68d',
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
        position: 'absolute'
    
    }
})