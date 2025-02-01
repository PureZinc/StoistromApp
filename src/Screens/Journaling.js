import { useState } from 'react';
import styles from "../styles";
import { Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import RandomPromptGenerator from "../Utils/prompts";


const journals = {
    emptyPage: {
        name: "Empty Page",
        prompts: ["empty"]
    },
    randomPrompt: {
        name: "Random Prompt",
        prompts: []
    },
    habitRelapse: {
        name: "Habit Relapse",
        prompts: ["What made you do habit again?", "How can you prevent it for next time?"]
    },
}

const JournalingScreen = ({route}) => {
    const { journalType } = route.params;
    const journal = journals[journalType];
    if (!journal) {
        return <Text>Journal type not found.</Text>;
    }

    const prompts = journalType === 'randomPrompt' ? [RandomPromptGenerator()] : journal.prompts;

    const [pageData, setPageData] = useState([]);
    const handleChange = (prompt, entry) => {
        setPageData(prevData => {
            // Check if the prompt already exists
            const existingEntryIndex = prevData.findIndex(item => item.prompt === prompt);
    
            if (existingEntryIndex !== -1) {
                // Prompt exists, update the entry
                const updatedData = [...prevData];
                updatedData[existingEntryIndex] = { prompt, entry };
                return updatedData;
            } else {
                // Prompt doesn't exist, add a new entry
                return [...prevData, { prompt, entry }];
            }
        });
    };
    
    const handleSubmit = () => {
        console.log(pageData);
        setPageData([]);
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text>{journal.name}</Text>
                {prompts && prompts.map((prompt, index) => (
                    <View key={index}>
                        {prompt === "empty" ? 
                            <TextInput placeholder="Prompt"/> : <Text>{prompt}</Text>
                        }
                        <TextInput
                            placeholder="Entry"
                            value={pageData.entry}
                        />
                        {index + 1 < prompts.length &&
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Next Page -{'>'}</Text>
                            </TouchableOpacity>
                        }
                    </View>
                ))}
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default JournalingScreen;