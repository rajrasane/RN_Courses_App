import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal, Animated, Dimensions, Easing, FlatList, TouchableWithoutFeedback , SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SidebarItem from './SidebarItem'; 
import { COLORS, SPACING, RADIUS, SHADOWS } from '../styles/designSystem';
import menuItems from '@/data/sidebarMenuItems';

const { width } = Dimensions.get('window');

const Sidebar = ({ menuVisible, toggleMenu, router }) => {
    const [slideAnim] = useState(new Animated.Value(-width));

    React.useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: menuVisible ? 0 : -width,
            duration: 500,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
        }).start();
    }, [menuVisible]);

    return (
        <SafeAreaView>
            <Modal transparent visible={menuVisible} animationType="none">
            <TouchableWithoutFeedback onPress={toggleMenu}>
                <View style={styles.overlay}>
                    <TouchableWithoutFeedback>
                        <Animated.View style={[styles.menuContainer, { transform: [{ translateX: slideAnim }] }]}>
                            <TouchableOpacity 
                                onPress={toggleMenu} 
                                style={styles.cancelButton}
                                accessible
                                accessibilityLabel="Close menu"
                                accessibilityHint="Closes the navigation menu"
                            >
                                <MaterialCommunityIcons name="close" size={28} color={COLORS.text.primary} />
                            </TouchableOpacity>

                            <FlatList
                                data={menuItems}
                                keyExtractor={(item) => item.title}
                                renderItem={({ item }) => (
                                    <SidebarItem title={item.title} route={item.route} toggleMenu={toggleMenu} router={router} />
                                )}
                            />
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    menuContainer: {
        width: width * 0.8,
        height: '100%',
        backgroundColor: COLORS.background,
        padding: SPACING.md,
        borderTopRightRadius: RADIUS.md,
        borderBottomRightRadius: RADIUS.md,
        ...SHADOWS.large,
    },
    cancelButton: { position: 'absolute', top: SPACING.md, left: SPACING.md },
});

export default Sidebar;
