import React, {useState} from 'react';
import {TextInput, StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const Home = ({navigation}) => {
    const [proposition, setProposition] = useState('Coffee');
    const [opposition, setOpposition] = useState('Tea');
    const [motion, setMotion] = useState('Which is better for breakfast?');

    const onSubmit = () => {
        navigation.navigate('Debate', {proposition, opposition, motion});
        setProposition('');
        setOpposition('');
        setMotion('');
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.formContainer}>
                <View style={styles.inputView}>
                <Text style={styles.inputLabel}>Proposition Stand</Text>
                <TextInput
                    style={styles.textInput}
                    keyboardAppearance={'default'}
                    keyboardType={'default'}
                    autoCorrect={true}
                    autoFocus={false}
                    multiline={false}
                    value={proposition}
                    onChangeText={setProposition}
                />
                </View>
                <View style={styles.inputView}>
                <Text style={styles.inputLabel}>Opposition Stand</Text>
                <TextInput
                    style={styles.textInput}
                    keyboardAppearance={'default'}
                    keyboardType={'default'}
                    autoCorrect={true}
                    autoFocus={false}
                    multiline={false}
                    value={opposition}
                    onChangeText={setOpposition}
                />
                </View>
                <View style={styles.inputView}>
                <Text style={styles.inputLabel}>Motion</Text>
                <TextInput
                    style={styles.textInput}
                    keyboardAppearance={'default'}
                    keyboardType={'default'}
                    autoCorrect={true}
                    autoFocus={false}
                    multiline={true}
                    numberOfLines={2}
                    value={motion}
                    onChangeText={setMotion}
                />
                </View>
                <View style={styles.buttonView}>
                <TouchableOpacity disabled={!proposition || !opposition || !motion} style={styles.submitButton} onPress={onSubmit}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
                </View>
             </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#f3f4fb',
    },
    formContainer: {
        minHeight: '80%',
        borderRadius: 25,
        justifyContent: 'space-evenly',
        backgroundColor: '#fff',
        margin: 10,
        padding: 4,
    },
    inputView: {
        backgroundColor: '#fafafa',
        padding: 3,
    },
    inputLabel: {
        marginBottom: 0,
        color: 'grey',
    },
    textInput: {
        marginTop: 0,
    },
    buttonView: {
        display: 'flex',
        alignItems: 'center',
    },
    submitButton: {
        color: '#fff',
        backgroundColor: '#ff4081',
        borderRadius: 20,
        minWidth: '50%',
        minHeight: 25,
        justifyContent: 'center',
    },
    submitText: {
        textAlign: 'center',
    },
});

export default Home;

