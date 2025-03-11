import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

const SideBarItem = ({ title, route, icon, toggleMenu, router }) => {
    // Check if current route matches this item's route
    const currentRoute = useRoute();
    const isActive = currentRoute.name === route.substring(route.lastIndexOf('/') + 1);
    
    const handlePress = () => {
        // Add haptic feedback here if desired
        router.push(route);
        toggleMenu();
    };

    return (
        <TouchableOpacity 
            style={[
                styles.menuItem, 
                isActive && styles.activeMenuItem
            ]} 
            onPress={handlePress} 
            activeOpacity={0.7}
            accessible
            accessibilityLabel={title}
            accessibilityHint={`Navigate to ${title}`}
            accessibilityRole="button"
        >
            <View style={styles.textContainer}>
                {icon && (
                    <MaterialCommunityIcons 
                        name={icon} 
                        size={22} 
                        color={isActive ? "#3D5CFF" : "#555"} 
                        style={styles.icon} 
                    />
                )}
                <Text style={[
                    styles.text,
                    isActive && styles.activeText
                ]}>
                    {title}
                </Text>
                {isActive && <View style={styles.activeDot} />}
            </View>
        </TouchableOpacity>
    );
};

export default SideBarItem;

const styles = StyleSheet.create({
    menuItem: { 
        paddingVertical: 14,
        paddingHorizontal: 20,
        marginVertical: 4,
        borderRadius: 10,
        backgroundColor: "#f8f9fa",
        position: 'relative',
    },
    activeMenuItem: {
        backgroundColor: "#EEF1FF",
        borderLeftWidth: 3,
        borderLeftColor: "#3D5CFF",
    },
    textContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        color: "#555",
        fontWeight: "500",
        fontSize: 16,
    },
    activeText: {
        color: "#3D5CFF",
        fontWeight: "600",
    },
    icon: {
        marginRight: 12,
    },
    activeDot: {
        position: 'absolute',
        right: 0,
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: "#3D5CFF",
    }
});