import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};
Header.defaultProps = {
    title: 'Weather App',
}

export default Header;
const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: '#666',
        width:500,
    },
    text: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'center',
    }
}

);