import React, { useState, useEffect } from 'react';
import { Animated, Easing, Text, View, TouchableOpacity } from 'react-native';
import JournalingModal from '../Components/JournalingModal'
import styles from '../styles';


export default function HomeScreen({navigation}) {
  const [journalChoicesVisible, setJournalChoicesVisible] = useState(false)

  const username = "Stoistrom User";

  const fade = new Animated.Value(0.25);
  useEffect(() => {
    if (journalChoicesVisible) {
      Animated.timing(fade, {
        toValue: 0.25,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fade, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }
  }, [journalChoicesVisible]);

  return (
    <Animated.View style={[styles.container, {opacity: fade}]}>
        <Text>Welcome, {username}!</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => setJournalChoicesVisible(true)}>
            <Text style={styles.buttonText}>Start Journal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("View Journals")}>
            <Text style={styles.buttonText}>View Journals</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>-- Habits Go Here --</Text>
        </View>

      <JournalingModal visible={journalChoicesVisible}
        onClose={() => setJournalChoicesVisible(false)}
        navigation={navigation}
      />

    </Animated.View>
  );
}