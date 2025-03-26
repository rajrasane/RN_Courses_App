import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SideBarItem from './SideBarItem';

const SideBarFooter = ({ toggleMenu, router }) => {
    return (
        <View style={styles.container}>
            <View style={styles.divider} />
            
            <View style={styles.footerSection}>
                <SideBarItem 
                    title="Settings" 
                    route="/(screens)/settings" 
                    icon="cog-outline" 
                    toggleMenu={toggleMenu} 
                    router={router} 
                />
                <SideBarItem 
                    title="Logout" 
                    route="/(auth)/login" 
                    icon="logout" 
                    toggleMenu={toggleMenu} 
                    router={router} 
                />
            </View>
            
            <Text style={styles.versionText}>Version 1.0.0</Text>
        </View>
    );
};

export default SideBarFooter;

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    divider: {
        height: 1,
        backgroundColor: '#eaeaea',
        marginVertical: 15,
    },
    footerSection: {
        marginBottom: 20,
    },
    versionText: {
        textAlign: 'center',
        fontSize: 12,
        color: '#aaa',
        marginBottom: 10,
    }
});