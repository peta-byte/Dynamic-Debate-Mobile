import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Timer from './Timer';
import Tally from './Tally';

const Debate = ({route}) => {
    const {proposition, opposition, motion} = route.params;

    return (
            <View style={styles.debateContainer}>
            <ScrollView style={styles.scrollView} contentInsetAdjustmentBehavior="automatic">
                <View style={styles.titleContainer}>
                    <Text style={{...styles.debateTopic, ...styles.containerText}}>{proposition}<Text style={styles.motionDesc}> VS </Text>{opposition}</Text>
                    <Text style={{...styles.motionDesc, ...styles.containerText}}>{motion}</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Timer />
                </View>
                <View style={styles.contentContainer}>
                    <Tally />
                </View>
            </ScrollView>
            </View>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        width: '100%',
        height: '100%',
    },
    debateContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    debateTopic: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    motionDesc: {
        fontSize: 20,
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,
    },
    contentContainer: {
        alignItems: 'center',
        width: '100%',
        marginVertical: 30,
    },
    containerText: {
        color: '#3f51b5',
    },
});

export default Debate;
