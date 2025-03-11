import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal, Animated, Dimensions, Easing, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Typography from './ui/Typography';
import { COLORS, SPACING, RADIUS, SHADOWS } from '../styles/designSystem';

const { width } = Dimensions.get('window');

const TabHeader = ({ title, showBackButton = false }) => {
    const router = useRouter();
    const [menuVisible, setMenuVisible] = useState(false);
    const [slideAnim] = useState(new Animated.Value(-width)); // Initial position off-screen
    const [scaleAnim] = useState(new Animated.Value(1)); // Initial scale value

    const toggleMenu = () => {
        if (menuVisible) {
            Animated.timing(slideAnim, {
                toValue: -width,
                duration: 500,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }).start(() => setMenuVisible(false));
        } else {
            setMenuVisible(true);
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 500,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }).start();
        }
    };

    const handlePressIn = () => {
        Animated.spring(scaleAnim, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            friction: 3,
            tension: 40,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.header}>
            {/* Back Button */}
            {showBackButton && (
                <TouchableOpacity 
                    onPress={() => router.back()} 
                    style={styles.backButton}
                    accessible={true}
                    accessibilityLabel="Go back"
                    accessibilityHint="Navigates to the previous screen"
                >
                    <MaterialCommunityIcons name="arrow-left" size={28} color={COLORS.text.light} />
                </TouchableOpacity>
            )}

            {/* Hamburger Menu Button */}
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                <TouchableOpacity 
                    onPress={toggleMenu} 
                    style={styles.menuButton}
                    activeOpacity={0.7}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                    accessible={true}
                    accessibilityLabel="Open menu"
                    accessibilityHint="Opens the navigation menu"
                >
                    <MaterialCommunityIcons name="menu" size={28} color={COLORS.text.light} />
                </TouchableOpacity>
            </Animated.View>

            {/* Title */}
            <Typography 
                variant="h3" 
                color="light" 
                style={styles.headerText}
                numberOfLines={1}
            >
                {title}
            </Typography>

            {/* Notification Button */}
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                <TouchableOpacity 
                    onPress={() => router.push('/(screens)/notifications')} 
                    style={styles.notificationButton}
                    activeOpacity={0.7}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                    accessible={true}
                    accessibilityLabel="Notifications"
                    accessibilityHint="View your notifications"
                >
                    <MaterialCommunityIcons name="bell-outline" size={26} color={COLORS.text.light} />
                </TouchableOpacity>
            </Animated.View>

            {/* Slide-in Menu */}
            <Modal transparent visible={menuVisible} animationType="none">
                <TouchableWithoutFeedback onPress={toggleMenu}>
                    <View style={styles.overlay}>
                        <TouchableWithoutFeedback>
                            <Animated.View style={[styles.menuContainer, { transform: [{ translateX: slideAnim }] }]}>
                                {/* Cancel Button */}
                                <TouchableOpacity 
                                    onPress={toggleMenu} 
                                    style={styles.cancelButton}
                                    activeOpacity={0.7}
                                    onPressIn={handlePressIn}
                                    onPressOut={handlePressOut}
                                    accessible={true}
                                    accessibilityLabel="Close menu"
                                    accessibilityHint="Closes the navigation menu"
                                >
                                    <MaterialCommunityIcons name="close" size={28} color={COLORS.text.primary} />
                                </TouchableOpacity>

                                {/* Menu Items */}
                                <TouchableOpacity 
                                    style={styles.menuItem} 
                                    onPress={() => {
                                        router.push('/');
                                        toggleMenu();
                                    }}
                                    activeOpacity={0.7}
                                    onPressIn={handlePressIn}
                                    onPressOut={handlePressOut}
                                >
                                    <Typography variant="subtitle1">Home</Typography>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={styles.menuItem} 
                                    onPress={() => {
                                        router.push('/(screens)/profile');
                                        toggleMenu();
                                    }}
                                    activeOpacity={0.7}
                                    onPressIn={handlePressIn}
                                    onPressOut={handlePressOut}
                                >
                                    <Typography variant="subtitle1">Profile</Typography>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={styles.menuItem} 
                                    onPress={() => {
                                        router.push('/(screens)/settings');
                                        toggleMenu();
                                    }}
                                    activeOpacity={0.7}
                                    onPressIn={handlePressIn}
                                    onPressOut={handlePressOut}
                                >
                                    <Typography variant="subtitle1">Settings</Typography>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={styles.menuItem} 
                                    onPress={() => {
                                        // Add your logout logic here
                                        console.log('Logout');
                                        toggleMenu();
                                    }}
                                    activeOpacity={0.7}
                                    onPressIn={handlePressIn}
                                    onPressOut={handlePressOut}
                                >
                                    <Typography variant="subtitle1" color="error">Logout</Typography>
                                </TouchableOpacity>
                            </Animated.View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
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
    backButton: {
        padding: SPACING.xs,
        marginRight: SPACING.sm,
    },
    menuButton: {
        padding: SPACING.xs,
        marginRight: SPACING.sm,
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
    },
    notificationButton: {
        padding: SPACING.xs,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    menuContainer: {
        width: width * 0.8, // Make the menu 80% of the screen width
        height: '100%',
        backgroundColor: COLORS.background,
        padding: SPACING.md,
        borderTopRightRadius: RADIUS.md,
        borderBottomRightRadius: RADIUS.md,
        ...SHADOWS.large,
    },
    cancelButton: {
        position: 'absolute',
        top: SPACING.md,
        left: SPACING.md,
    },
    menuItem: {
        paddingVertical: SPACING.sm,
        paddingHorizontal: SPACING.lg,
        marginTop: SPACING.md,
    },
});

export default TabHeader;