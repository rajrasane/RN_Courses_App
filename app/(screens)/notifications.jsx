import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; 
import { Ionicons } from '@expo/vector-icons';
import BackButton from '../../components/BackButton';

const NotificationsScreen = () => {
    const router = useRouter(); // Initialize useRouter

    return (
        <SafeAreaView style={styles.container}>
            {/* Back Button */}
            <BackButton />

            <View style={styles.content}>
                {/* Image */}
                <Image
                    source={require('../../assets/images/notification-image.png')}
                    style={styles.image}
                    resizeMode="contain"
                />

                {/* Text */}
                <Text style={styles.title}>No Notifications yet!</Text>
                <Text style={styles.subtitle}>We'll notify you once we have something for you</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    image: {
        width: 230,
        height: 230,
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
    },
});

export default NotificationsScreen;