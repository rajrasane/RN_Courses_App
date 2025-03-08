    import React from 'react';
    import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
    import MessageItem from '../components/MessageItem';  // Import the MessageItem component
    import messages  from '../data/messageData';  // Import the messages array
    import { useRouter } from 'expo-router'; // Import useRouter


    const MessageList = () => {
    
    const router = useRouter(); // Initialize useRouter

    return (
        <View style={styles.container}>
        <FlatList
            data={messages}  // Pass the messages array
            keyExtractor={(item) => item.id.toString()} // Unique key for each item
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => router.push({
                    pathname: '/(screens)/chatscreens',
                    params: { sender: item.sender, message: item.message, date: item.date }
                })}>                
                    <MessageItem sender={item.sender} message={item.message} date={item.date} />
                </TouchableOpacity>
            )}
        />
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    });

    export default MessageList;
