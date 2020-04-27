import React from 'react';
import { Feather } from '@expo/vector-icons';
import * as Mailcomposer from 'expo-mail-composer';

import { useNavigation, useRoute  } from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Details () {

    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.titulo}" com o valor de ${ 
                                        Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'            
                                        }).format(incident.value)}`

    function navigateBack () {
        navigation.goBack();
    }


    function sendEmail() {
        Mailcomposer.composeAsync({
            subject: `Herói do caso: ${incident.titulo}`, 
            recipients: [incident.email], 
            body: message,
        });


    }

    function sendWhatsApp () {
        
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }
    return (

    <View style={styles.container}>
        <View style={styles.header}>  
            <Image source={logoImg}/>
            <TouchableOpacity onPress={navigateBack}>
                <Feather name="arrow-left" size={28} color="#E82041"></Feather>
            </TouchableOpacity>
        </View> 

  
        <View style={styles.incident}>
            <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG: </Text>    
            <Text style={styles.incidentValue}>{incident.name}</Text>    
                
            <Text style={styles.incidentProperty}>Caso: </Text>    
            <Text style={styles.incidentValue}>{incident.description} </Text>    
                
            <Text style={styles.incidentProperty}>Valor: </Text>    
            <Text style={styles.incidentValue}>
            {Intl.NumberFormat('pt-BR', {
                         style: 'currency',
                      currency: 'BRL'            
            }).format(incident.value)}
            </Text>    

        </View>
        
        <View style={styles.contactBox}>
            <Text style={styles.heroeTitle}>Salve o Dia!</Text>            
            <Text style={styles.heroeTitle}>Seja o herói desse caso.</Text>            
            <Text style={styles.heroeDescription}>Entre em contato</Text>

            <View style={styles.actions}>   
                <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                        <Text style={styles.actionText}> WhatsApp </Text>
                </TouchableOpacity>  
                <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}> E-mail </Text>
                </TouchableOpacity>  
            </View>
             

           

        </View>
      
    </View>); 
   
}