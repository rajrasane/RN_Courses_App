import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import userData from '@/data/userData'; // Static import

const SideBarHeader = () => {
    const { userName, email, profilePic, role } = userData;

    // Determine the image source
    const imageSource = profilePic
        ? { uri: profilePic }
        : require('../assets/icons/user-icon.png');

    return (
        <View style={styles.profileSection}>
            <View style={styles.profileImageContainer}>
                <Image
                    source={imageSource}
                    style={styles.profileImage}
                    defaultSource={require('../assets/icons/user-icon.png')}
                    onError={(e) => console.log('Image load error:', e.nativeEvent.error)}
                />
            </View>
            <Text style={styles.profileName}>{userName || 'User'}</Text>
            <Text style={styles.profileEmail}>{email || 'No email provided'}</Text>
            {role && (
                <View style={styles.roleContainer}>
                    <Text style={styles.roleText}>{role.toUpperCase()}</Text>
                </View>
            )}
            <View style={styles.divider} />
        </View>
    );
};

export default SideBarHeader;

const styles = StyleSheet.create({
    profileSection: {
        alignItems: 'center',
        paddingVertical: 20,
        minHeight: 180,
    },
    profileImageContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#3D5CFF',
    },
    profileImage: {
        width: '100%',
        height: '100%',
    },
    profileName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    profileEmail: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    roleContainer: {
        backgroundColor: '#EEF1FF',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
        marginTop: 4,
    },
    roleText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#3D5CFF',
    },
    divider: {
        height: 1,
        backgroundColor: '#eaeaea',
        marginVertical: 15,
        width: '100%',
        marginTop: 15,
    },
});