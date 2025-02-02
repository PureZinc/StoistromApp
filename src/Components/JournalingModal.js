import { Text, View, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import Journal from '../../models/Journal';


const JournalingModal = ({ visible, onClose, navigation }) => {
    const journalTypes = Journal.getAllJournalTypes();

    return (
        <Modal
            animationType="slide" 
            transparent
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={style.modalView}>
                <TouchableOpacity style={style.button} onPress={onClose}>
                    <Text style={style.buttonText}>\/</Text>
                </TouchableOpacity>
                <View>
                    {journalTypes.map((type, index) => {
                        <View>
                            <TouchableOpacity key={index} style={style.button} onPress={() => {navigation.navigate("Journaling", {journalType: type.name}), onClose()}}>
                                <Text style={style.buttonText}>{type.name}</Text>
                            </TouchableOpacity>
                        </View>
                    })}
                </View>
            </View>
        </Modal>
    )
};

const style = StyleSheet.create({
    modalView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    modalCell: {
        width: 150,
        height: 150,
        margin: 5,
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        backgroundColor: 'black',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 16,
    },
})

export default JournalingModal;