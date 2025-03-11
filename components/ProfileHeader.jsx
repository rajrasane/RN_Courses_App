// ProfileHeader.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileHeader = ({ profilePic, userName, email }) => {
    const imageSource = profilePic ? { uri: profilePic } : require('../assets/icons/user-icon.png');

    return (
        <View style={styles.container}>
            <Image source={imageSource} style={styles.profileImage} />
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.userEmail}>{email}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 30,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
    },
    userEmail: {
        fontSize: 16,
        color: 'gray',
    },
});

export default ProfileHeader;