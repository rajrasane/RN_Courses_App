import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import SideBarItem from '../components/SideBarItem';

const SideBarList = ({ menuItems, toggleMenu, router }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>MENU</Text>
            
            <FlatList
                data={menuItems}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                    <SideBarItem 
                        title={item.title} 
                        route={item.route} 
                        icon={item.icon} 
                        toggleMenu={toggleMenu} 
                        router={router} 
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

export default SideBarList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: '700',
        color: '#888',
        marginLeft: 20,
        marginBottom: 8,
    },
    listContent: {
        paddingBottom: 20,
    }
});