import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Tally = () => {
    const [propositionTally, setPropositionTally] = useState(0);
    const [oppositionTally, setOppositionTally] = useState(0);

    const add = (tally) => {
        if (tally.panel === 'Proposition') {
            propositionTally !== 100 && propositionTally < 100 ? setPropositionTally(propositionTally + 10) : '';
        }
        if (tally.panel === 'Opposition') {
            oppositionTally !== 100 && oppositionTally < 100 ? setOppositionTally(oppositionTally + 10) : '';
        }
    };

    const deduct = (tally) => {
        if (tally.panel === 'Proposition') {
            propositionTally !== 0 && !(propositionTally < 0 ) ? setPropositionTally(propositionTally - 10) : '';
        }
        if (tally.panel === 'Opposition') {
            oppositionTally !== 0 && !(oppositionTally < 0 ) ? setOppositionTally(oppositionTally - 10) : '';
        }
    };

    return (
        <View style={styles.tallyContainer}>
            <View style={styles.propositionBox}>
                <Text style={styles.tallyTitle}>Proposition Tally</Text>
                <Text style={styles.points}>{propositionTally}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => add({panel: 'Proposition'})}>
                        <Text style={styles.buttonText}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => deduct({panel: 'Proposition'})}>
                        <Text style={styles.buttonText}>Deduct</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.oppositionBox}>
                <Text style={styles.tallyTitle}>Opposition Tally</Text>
                <Text style={styles.points}>{oppositionTally}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => add({panel: 'Opposition'})}>
                        <Text style={styles.buttonText}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => deduct({panel: 'Opposition'})}>
                        <Text style={styles.buttonText}>Deduct</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    tallyContainer: {
        width: '100%',
        alignItems: 'center',
    },
    tallyTitle: {
        fontSize: 20,
        marginBottom: 10,
        color: '#3f51b5',
    },
    propositionBox: {
        backgroundColor: '#fff',
        width: '80%',
        marginVertical: 10,
        minHeight: 250,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    oppositionBox: {
        backgroundColor: '#fff',
        width: '80%',
        marginVertical: 10,
        minHeight: 250,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    buttonContainer: {
        flexDirection: 'row',
        margin: 5,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '20%',
        minHeight: 25,
        margin: 10,
        backgroundColor: '#ff4081',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
    },
    points: {
        fontSize: 40,
    },
});

export default Tally;
