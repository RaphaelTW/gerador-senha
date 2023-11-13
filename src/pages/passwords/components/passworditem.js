import react from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export function PasswordItem({ data, removePassword }) {
    return (
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text style={styles.text}>{data}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#000000",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text:{
        color: "#FFF"
    }
})