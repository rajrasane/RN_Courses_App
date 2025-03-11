import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Typography from './ui/Typography';

const SidebarItem = ({ title, route, toggleMenu, router, handlePressIn, handlePressOut }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            style={styles.menuItem} 
            onPress={() => {
                router.push(route);
                toggleMenu();
            }}
            activeOpacity={0.6}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
        >
            <Typography variant="subtitle1" style={styles.text}>{title}</Typography>
        </TouchableOpacity>
        </View>
        
    );
};

export default SidebarItem;

const styles = StyleSheet.create({
    container : {
        marginTop : 30,
    },  
    menuItem: { 
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
        backgroundColor: "white",
        borderRadius: 8,
    },
    text: {
        color: "#333",
        fontWeight: "500",
    },
});
