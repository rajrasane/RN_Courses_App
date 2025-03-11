import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import BackButton from '../../components/BackButton';

const SettingsScreen = () => {
    const router = useRouter();

    const settingsOptions = [
        { title: 'Account', icon: 'person-outline', action: () => router.push('/accountSettings') },
        { title: 'Notifications', icon: 'notifications-outline', action: () => router.push('/notificationSettings') },
        { title: 'Privacy', icon: 'lock-closed-outline', action: () => router.push('/privacySettings') },
        { title: 'Help & Support', icon: 'help-circle-outline', action: () => router.push('/helpSupport') },
        { title: 'About', icon: 'information-circle-outline', action: () => router.push('/about') },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <BackButton />

            <View style={styles.content}>
                <Text style={styles.title}>Settings</Text>

                {settingsOptions.map((option, index) => (
                    <TouchableOpacity key={index} style={styles.option} onPress={option.action}>
                        <Ionicons name={option.icon} size={24} color="black" style={styles.optionIcon} />
                        <Text style={styles.optionText}>{option.title}</Text>
                        <Ionicons name="chevron-forward-outline" size={24} color="gray" style={styles.optionArrow} />
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 20, // Add some top margin to separate from back button
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 2,
        textAlign: 'left',
        marginLeft: 50,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    optionIcon: {
        marginRight: 15,
    },
    optionText: {
        fontSize: 18,
        flex: 1,
    },
    optionArrow: {
        marginLeft: 'auto',
    },
});

export default SettingsScreen;