import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Modal, Animated, Dimensions, Easing, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import SideBarList from '../components/SideBarList';
import SideBarHeader from '../components/SideBarHeader';
import SideBarFooter from '../components/SideBarFooter';
import CrossButton from '../components/CrossButton';

const menuItems = [
    { title: 'Home', route: '/(tabs)/index' },
    { title: 'Profile', route: '/(tabs)/profile' },
];

const { width } = Dimensions.get('window');

const Sidebar = ({ menuVisible, toggleMenu, router }) => {
    const [slideAnim] = useState(new Animated.Value(-width));
    const [isModalVisible, setIsModalVisible] = useState(false);
    const overlayAnim = useRef(new Animated.Value(0)).current;
    const animationCompleted = useRef(true);

    useEffect(() => {
        if (menuVisible) {
            setIsModalVisible(true);
            animationCompleted.current = false;

            setTimeout(() => {
                Animated.parallel([
                    Animated.timing(slideAnim, {
                        toValue: 0,
                        duration: 300,
                        easing: Easing.out(Easing.cubic),
                        useNativeDriver: true,
                    }),
                    Animated.timing(overlayAnim, {
                        toValue: 1,
                        duration: 300,
                        easing: Easing.out(Easing.cubic),
                        useNativeDriver: true,
                    }),
                ]).start(() => {
                    animationCompleted.current = true;
                });
            }, 10);
        } else if (isModalVisible) {
            animationCompleted.current = false;

            Animated.parallel([
                Animated.timing(slideAnim, {
                    toValue: -width,
                    duration: 300,
                    easing: Easing.out(Easing.cubic),
                    useNativeDriver: true,
                }),
                Animated.timing(overlayAnim, {
                    toValue: 0,
                    duration: 280,
                    easing: Easing.out(Easing.cubic),
                    useNativeDriver: true,
                }),
            ]).start(() => {
                if (!menuVisible) {
                    setIsModalVisible(false);
                }
                animationCompleted.current = true;
            });
        }
    }, [menuVisible]);

    const handleClose = () => {
        if (animationCompleted.current) {
            toggleMenu();
        }
    };

    const handleOverlayPress = () => {
        if (animationCompleted.current) {
            handleClose();
        }
    };

    return (
        <SafeAreaView>
            <Modal transparent visible={isModalVisible} animationType="none" onRequestClose={handleClose}>
                <Animated.View
                    style={[
                        styles.overlay,
                        {
                            opacity: overlayAnim,
                            backgroundColor: 'rgba(0,0,0,0.3)',
                        },
                    ]}
                >
                    <TouchableWithoutFeedback onPress={handleOverlayPress}>
                        <View style={styles.overlayTouchable}>
                            <TouchableWithoutFeedback>
                                <Animated.View
                                    style={[
                                        styles.menuContainer,
                                        {
                                            transform: [{ translateX: slideAnim }],
                                            opacity: slideAnim.interpolate({
                                                inputRange: [-width, -width / 2, 0],
                                                outputRange: [0.85, 0.95, 1],
                                            }),
                                        },
                                    ]}
                                >
                                    <CrossButton onPress={handleClose} />
                                    <SideBarHeader />
                                    <SideBarList menuItems={menuItems} toggleMenu={handleClose} router={router} />
                                    <SideBarFooter toggleMenu={handleClose} router={router} />
                                </Animated.View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                </Animated.View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    overlayTouchable: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    menuContainer: {
        width: width * 0.8,
        height: '100%',
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 12,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 8,
    },
});

export default Sidebar;