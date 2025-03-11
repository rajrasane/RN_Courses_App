// ProfileFooter.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ProfileFooter = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.footerButton} onPress={onPress}>
            <Text style={styles.footerText}>Logout</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    footerButton: {
        backgroundColor: '#000', 
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 10,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    footerText: {
        color: '#FFFFFF', // White text for contrast
        fontSize: 18,
        fontWeight: '600',
    },
});

export default ProfileFooter;