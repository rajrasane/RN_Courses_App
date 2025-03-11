// ProfileListItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ProfileListItem = ({ iconName, text, onPress }) => {
    return (
        <TouchableOpacity style={styles.listItem} onPress={onPress}>
            <View style={styles.listItemContent}>
                <MaterialCommunityIcons name={iconName} size={24} color="#3D5CFF" />
                <Text style={styles.listItemText}>{text}</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    listItemContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 18,
        color: '#333',
        marginLeft: 15,
    },
});

export default ProfileListItem;