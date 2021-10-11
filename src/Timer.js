import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {timer, takeUntil} from 'rxjs';
import * as moment from 'moment';

const timerInterval  = 1000;
const max_secs = 180;
let source = timer(timerInterval, timerInterval);
let duration = moment.duration((180 * 1000), 'milliseconds');

const Timer = () => {
    const [time, setTime] = useState('3:00');
    const [primaryBtnText, setPrimaryBtnText] = useState('Start');
    const [playSubs, setPlaySubs] = useState([]);
    const [pausedOn, setPausedOn] = useState(0);
    const [valFromSub, setValFromSub] = useState(0);


    const start = () => {
        if (primaryBtnText === 'Start') {
            setPrimaryBtnText('Pause');
            if (pausedOn === 0 && valFromSub === 0) {
                setPlaySubs([
                    source.pipe(takeUntil(timer(180000))).subscribe((val) => {
                        duration = moment.duration((duration.asMilliseconds() - timerInterval), 'milliseconds');
                        let timeStr = duration.seconds() === 0 ?
                            duration.minutes() + ':' + duration.seconds() + '0' :
                            duration.minutes() + ':' + duration.seconds();
                        setTime(timeStr);
                        let valPlusOffset = val + 1;
                        setValFromSub(valPlusOffset);
                    }),
                ]);
            } else {
                if (!(pausedOn >= max_secs) && !(valFromSub >= max_secs)) {
                    let differenceInTimeToEnd = max_secs - pausedOn;
                    let untilMilliSecs = differenceInTimeToEnd * timerInterval;
                    source = timer(undefined, timerInterval);
                    setPlaySubs([
                        source.pipe(takeUntil(timer(untilMilliSecs))).subscribe((val) => {
                            duration = moment.duration((duration.asMilliseconds() - timerInterval), 'milliseconds');
                            let timeStr = duration.seconds() === 0 ?
                                duration.minutes() + ':' + duration.seconds() + '0' :
                                duration.minutes() + ':' + duration.seconds();
                            setTime(timeStr);
                            setPausedOn(pausedOn + 1);
                            setValFromSub(pausedOn);
                        }),
                    ]);
                } else {
                    setPrimaryBtnText('Start');
                    setPausedOn(0);
                    setValFromSub(0);
                }
            }
        }
    };
    const pause = () => {
        if (!(pausedOn >= max_secs) && !(valFromSub >= max_secs)) {
            setPrimaryBtnText('Start');
            setPausedOn(valFromSub);
            if (playSubs.length > 0) {
                playSubs[0].unsubscribe();
                playSubs.shift();
            }
        } else {
            setPrimaryBtnText('Start');
            setPausedOn(0);
            setValFromSub(0);
        }
    };
    const stop = () => {
        if (playSubs.length > 0) {
            playSubs[0].unsubscribe();
            playSubs.shift();
        }
        setPausedOn(0);
        setValFromSub(0);
        setPrimaryBtnText('Start');
        duration = moment.duration((max_secs * 1000), 'milliseconds');
        let timeStr = duration.seconds() === 0 ?
            duration.minutes() + ':' + duration.seconds() + '0' :
            duration.minutes() + ':' + duration.seconds();
        setTime(timeStr);
    };

    return (
        <View style={styles.timerContainer}>
            <View style={styles.contentContainer}>
                <Text style={{...styles.containerText, ...styles.title}}>Timer</Text>
                <Text style={styles.containerText}>You have <Text style={styles.timeText}> 3 minutes </Text> to present your view.</Text>
                <View style={styles.timerBox}>
                    <Text style={styles.countDownText}>{time}</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={primaryBtnText === 'Start' ? start : pause }>
                    <Text style={styles.buttonText}>{primaryBtnText}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={stop}>
                    <Text style={styles.buttonText}>Stop</Text>
                </TouchableOpacity>
            </View>
            <Text style={{...styles.tallyText, ...styles.containerText}}>Add 10 points for each meaningful thought or deduct 10 points for "better luck next time".</Text>
            <Text style={{...styles.tallyText, ...styles.containerText}}>The maximum points possible are 100. <Text style={styles.italicsText}>Good luck!</Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    timerContainer: {
        alignItems: 'center',
        width: '100%',
    },
    contentContainer: {
        width: '100%',
        alignItems: 'center',
    },
    title: {
        textDecorationLine: 'underline',
        fontSize: 20,
        margin: 5,
    },
    containerText: {
        color: '#3f51b5',
    },
    countDownText: {
        fontSize: 20,
    },
    timeText: {
        fontWeight: 'bold',
    },
    timerBox: {
        margin: 5,
        backgroundColor: '#fff',
        width: '70%',
        minHeight: 150,
        alignItems: 'center',
        justifyContent: 'center',
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
    tallyText: {
        textAlign: 'center',
        margin: 5,
    },
    italicsText: {
        fontStyle: 'italic',
    },
});

export default Timer;
