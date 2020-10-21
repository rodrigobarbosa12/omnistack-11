import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import * as MailComposer from 'expo-mail-composer';
import styles from './styles';



const Detail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {
            name,
            description,
            value,
            city,
            uf,
            title,
            email,
            whatsapp
        } = route.params.incident;

    const valorEmReal = Intl
            .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
            .format(value)

    const message = `Olá ${name}, estou entrando em contato pois gostaria de ajudar no caso "${title}" com o valor de ${valorEmReal}`;

    const navigateBack = () => {
        navigation.goBack();
    }

    const sendEmail = () => {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${title}`,
            recipients: [email],
            body: message,
        });
    }

    const sendWhatsapp  = () => {
        Linking.openURL(`whatsapp://send?phone=${whatsapp}&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={16} color="#E02041"/>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.incidentValue}>
                    {name} de {city}/{uf}
                </Text>

                <Text style={styles.incidentProperty}>CASO</Text>
                <Text style={styles.incidentValue}>{description}</Text>

                <Text style={styles.incidentProperty}>VALOR</Text>
                <Text style={styles.incidentValue}>{valorEmReal}</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contado:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Detail;
