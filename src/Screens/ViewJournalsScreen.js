import styles from "../styles";
import { Text, View } from 'react-native';

const ViewJournalsScreen = () => {

    return (
        <View style={styles.container}>
            <View>
                <Text>Journal Name</Text>
                <Text>Journal Type</Text>
            </View>
        </View>
    );
};

export default ViewJournalsScreen;