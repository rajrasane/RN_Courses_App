import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Typography from './ui/Typography';
import Sidebar from '../components/SideBar'; 
import { COLORS, SPACING } from '../styles/designSystem';

const TabHeader = ({ title, showBackButton = false }) => {
    const router = useRouter();
    const [menuVisible, setMenuVisible] = useState(false);
    const [scaleAnim] = useState(new Animated.Value(1));

    const toggleMenu = () => setMenuVisible(!menuVisible);

    const handlePressIn = () => {
        Animated.spring(scaleAnim, { toValue: 0.95, useNativeDriver: true }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleAnim, { toValue: 1, friction: 3, tension: 40, useNativeDriver: true }).start();
    };

    return (
        <View style={styles.header}>
            {showBackButton && (
                <TouchableOpacity 
                    onPress={() => router.back()} 
                    style={styles.backButton}
                    accessible
                    accessibilityLabel="Go back"
                    accessibilityHint="Navigates to the previous screen"
                >
                    <MaterialCommunityIcons name="arrow-left" size={28} color={COLORS.text.light} />
                </TouchableOpacity>
            )}

            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                <TouchableOpacity 
                    onPress={toggleMenu} 
                    style={styles.menuButton}
                    activeOpacity={0.7}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                    accessible
                    accessibilityLabel="Open menu"
                    accessibilityHint="Opens the navigation menu"
                >
                    <MaterialCommunityIcons name="menu" size={28} color={COLORS.text.light} />
                </TouchableOpacity>
            </Animated.View>

            <Typography variant="h3" color="light" style={styles.headerText} numberOfLines={1}>
                {title}
            </Typography>

            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                <TouchableOpacity 
                    onPress={() => router.push('/(screens)/notifications')} 
                    style={styles.notificationButton}
                    activeOpacity={0.7}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                    accessible
                    accessibilityLabel="Notifications"
                    accessibilityHint="View your notifications"
                >
                    <MaterialCommunityIcons name="bell-outline" size={26} color={COLORS.text.light} />
                </TouchableOpacity>
            </Animated.View>

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
        justifyContent: 'space-between',
        padding: SPACING.md,
        backgroundColor: COLORS.primary,
    },    
    backButton: { padding: SPACING.xs, marginRight: SPACING.sm },
    headerText: { flex: 1, textAlign: 'center' },
    notificationButton: { padding: SPACING.xs },
});

export default TabHeader;
