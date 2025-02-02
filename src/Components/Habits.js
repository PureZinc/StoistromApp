import { Text, View, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import Habit from '../../models/Habit';


const HabitsModal = ({ visible, onClose, navigation }) => {
    const habits = [
        {
            name: 'No Smoking',
            duration: 'daily',
            isGood: false,
            timeLogs: []
        },
        {
            name: 'Work Out',
            duration: 'weekly',
            isGood: true,
            timeLogs: []
        }
    ]

    return (
        <Modal
            animationType="slide"
            transparent
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalView}>
                {/* Close button at top */}
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <Text style={styles.buttonText}>\/</Text>
                </TouchableOpacity>

                {/* Scrollable habits list */}
                <ScrollView style={styles.scrollView}>
                    <View style={styles.habitsContainer}>
                        {habits.map((habit, index) => (
                            <View key={index} style={styles.habitCard}>
                                <TouchableOpacity 
                                    style={styles.button}
                                    onPress={() => {
                                        navigation.navigate("HabitDetail", { habitId: habit.id });
                                        onClose();
                                    }}
                                >
                                    <Text style={styles.habitName}>{habit.name}</Text>
                                    <Text style={styles.habitFrequency}>
                                        {habit.frequency || 'Daily'}
                                    </Text>
                                    {habit.streak > 0 && (
                                        <Text style={styles.streakText}>
                                            🔥 {habit.streak} day streak
                                        </Text>
                                    )}
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    scrollView: {
        width: '100%',
        maxHeight: '80%',
    },
    habitsContainer: {
        padding: 20,
        paddingBottom: 40,
    },
    habitCard: {
        marginBottom: 10,
        width: '100%',
    },
    closeButton: {
        width: '100%',
        padding: 15,
        backgroundColor: 'black',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 10,
        padding: 15,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    habitName: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    habitFrequency: {
        color: '#cccccc',
        fontSize: 14,
    },
    streakText: {
        color: '#ffa500',
        fontSize: 14,
        marginTop: 5,
    },
});

export default HabitsModal;