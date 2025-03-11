// ProfileList.js
import React from 'react';
import { FlatList } from 'react-native';
import ProfileListItem from './ProfileListItem';

const ProfileList = ({ items }) => {
    const renderItem = ({ item }) => (
        <ProfileListItem
            iconName={item.iconName}
            text={item.text}
            onPress={item.onPress}
        />
    );

    return (
        <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
        />
    );
};

export default ProfileList;