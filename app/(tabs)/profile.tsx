// ProfileScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native'; // Changed ScrollView to View
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import TabHeader from '../../components/TabHeader';
import userData from '../../data/userData';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileList from '../../components/ProfileList';
import ProfileFooter from '../../components/ProfileFooter';

const ProfileScreen = () => {

    const router = useRouter();

    const { userName, email, profilePic } = userData;

    const listItems = [
        { iconName: 'account-circle-outline', text: 'Account Details', onPress: () => {} },
        { iconName: 'account-edit-outline', text: 'Edit Account', onPress: () => {} },
        { iconName: 'cog-outline', text: 'Settings', onPress: () => {router.push('/(screens)/settings')} },
        { iconName: 'help-circle-outline', text: 'Help', onPress: () => {} },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <TabHeader title="Profile" />
            <View style={styles.content}>
                <ProfileHeader profilePic={profilePic} userName={userName} email={email} />
                <ProfileList items={listItems} />
                <ProfileFooter onPress={() => {router.push('/(auth)/login')}} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 60,
    },
    content: {
        flex: 1, // Added flex: 1 to the content view
    },
});

export default ProfileScreen;