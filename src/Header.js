import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Linking} from 'react-native';
import { faComments } from '@fortawesome/free-solid-svg-icons';

const gitHubURL = 'https://github.com/';

const Header = () => (
    <View style={styles.headerContainer}>
        <View style={styles.leftContainer}>
            <FontAwesomeIcon icon={ faComments } style={styles.headerTitle} size={24} />
            <Text style={styles.headerTitle}>Dynamic Debate</Text>
        </View>
        <TouchableOpacity onPress={() => Linking.openURL(gitHubURL)}>
            <FontAwesomeIcon icon={ faGithub } style={styles.headerTitle} size={24} />
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    headerContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 3,
    },
    headerTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 3,
    },
    leftContainer: {
        flexDirection: 'row',
    },
});

export default Header;
