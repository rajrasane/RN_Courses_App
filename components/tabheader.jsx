import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Import useRouter

const TabHeader = ({ title, showBackButton = false }) => {
    const router = useRouter(); // Initialize useRouter
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <View style={styles.header}>
            {/* Hamburger Menu */}
            <TouchableOpacity onPress={() => setMenuVisible(true)} style={styles.menuButton}>
                <MaterialCommunityIcons name="menu" size={28} color="#fff" />
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.headerText}>{title}</Text>

            {/* Spacer to push notification to the right */}
            <View style={{ flex: 1 }} />

            {/* Notification Button */}
            <TouchableOpacity onPress={() => router.push('/(screens)/notifications')} style={styles.notificationButton}>
                <MaterialCommunityIcons name="bell-outline" size={26} color="#fff" />
            </TouchableOpacity>

            {/* Dropdown Menu */}
            <Modal transparent visible={menuVisible} animationType="fade">
                <TouchableOpacity
                    style={styles.overlay}
                    activeOpacity={1}
                    onPress={() => setMenuVisible(false)}
                >
                    <View style={styles.menuContainer}>
                        <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Home')}>
                            <Text style={styles.menuText}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Profile')}>
                            <Text style={styles.menuText}>Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Settings')}>
                            <Text style={styles.menuText}>Settings</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Logout')}>
                            <Text style={styles.menuText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start', // Align items to the start
        padding: 14.5,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: '#3D5CFF',
    },
    menuButton: {
        padding: 5,
        marginRight: 10, // Add some spacing between the menu and the title
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },
    notificationButton: {
        padding: 5,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    menuContainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        marginRight: 15,
        marginBottom: 50,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    menuItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    menuText: {
        fontSize: 16,
        color: '#333',
    },
});

export default TabHeader;