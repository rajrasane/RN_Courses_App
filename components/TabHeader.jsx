import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Sidebar from '../components/SideBar'; 

const TabHeader = ({ title, showBackButton = false }) => {
    const router = useRouter();
    const [menuVisible, setMenuVisible] = useState(false);
    const menuIconAnim = useRef(new Animated.Value(1)).current;
    const notificationIconAnim = useRef(new Animated.Value(1)).current;
    const lastToggleTime = useRef(0);

    const toggleMenu = () => {
        // Prevent rapid toggling by checking the time since last toggle
        const now = Date.now();
        if (now - lastToggleTime.current < 500) return; // Debounce by 500ms
        
        lastToggleTime.current = now;
        setMenuVisible(!menuVisible);
    };

    const animateIcon = (animValue) => {
        Animated.sequence([
            Animated.timing(animValue, {
                toValue: 0.9,
                duration: 100,
                useNativeDriver: true
            }),
            Animated.spring(animValue, {
                toValue: 1,
                friction: 3,
                tension: 40,
                useNativeDriver: true
            })
        ]).start();
    };

    const handleMenuPress = () => {
        animateIcon(menuIconAnim);
        toggleMenu();
    };

    const handleNotificationPress = () => {
        animateIcon(notificationIconAnim);
        router.push('/(screens)/notifications');
    };

    return (
        <View style={styles.header}>
            {/* Menu Button */}
            <Animated.View style={{ transform: [{ scale: menuIconAnim }] }}>
                <TouchableOpacity 
                    onPress={handleMenuPress} 
                    style={styles.menuButton}
                    activeOpacity={0.7}
                    accessible
                    accessibilityLabel="Open menu"
                    accessibilityHint="Opens the navigation menu"
                >
                    <MaterialCommunityIcons name="menu" size={28} color="#fff" />
                </TouchableOpacity>
            </Animated.View>

            {/* Title */}
            <Text style={styles.headerText} numberOfLines={1}>{title}</Text>

            {/* Spacer to push notification to the right */}
            <View style={{ flex: 1 }} />

            {/* Notification Button */}
            <Animated.View style={{ transform: [{ scale: notificationIconAnim }] }}>
                <TouchableOpacity 
                    onPress={handleNotificationPress}
                    style={styles.notificationButton}
                    activeOpacity={0.7}
                    accessible
                    accessibilityLabel="Notifications"
                    accessibilityHint="View your notifications"
                >
                    <MaterialCommunityIcons name="bell-outline" size={24.5} color="#fff" />
                </TouchableOpacity>
            </Animated.View>

            {/* Sidebar Menu */}
            <Sidebar menuVisible={menuVisible} toggleMenu={toggleMenu} router={router} />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 14.5,
        backgroundColor: '#3D5CFF',
    },    
    menuButton: {
        padding: 5,
        marginRight: 10,
    },
    headerText: {
        fontSize: 22,
        fontWeight: '600',
        color: '#fff',
    },
    notificationButton: {
        padding: 5,
    },
});

export default TabHeader;