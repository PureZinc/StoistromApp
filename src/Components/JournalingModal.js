import { Text, View, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const JournalingModal = ({visible, onClose, navigation}) => {
    emptyPage = {journalType: "Empty Page"};
    randomPrompt = {journalType: "Random Prompt"};

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
                    <View>
                        <TouchableOpacity style={style.button} onPress={() => {navigation.navigate("Journaling", {journalType: "emptyPage"}), onClose()}}>
                            <Text style={style.buttonText}>Empty Page</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={style.button} onPress={() => {navigation.navigate("Journaling", {journalType: "randomPrompt"}), onClose()}}>
                            <Text style={style.buttonText}>Random Prompt</Text>
                        </TouchableOpacity>
                    </View>
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