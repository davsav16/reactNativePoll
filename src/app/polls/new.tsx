import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { Redirect, Stack } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { useAuth } from "../providers/AuthProvider";

export default function CreatePoll() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);

  const { user } = useAuth();

  const createPoll = () => {
    console.warn("Create Poll");
  };

  if (!user) {
    return <Redirect href="/login" />;
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Create Poll" }} />
      <Text style={styles.label}>Title</Text>
      <TextInput
        value={question}
        onChangeText={setQuestion}
        placeholder="Type your question here"
        style={styles.input}
      />
      <Text style={styles.label}>Options</Text>
      {options.map((option, index) => (
        <View style={{ justifyContent: "center" }}>
          <TextInput
            key={index}
            placeholder={`Option ${index + 1}`}
            style={styles.input}
            value={option}
            onChangeText={(text) => {
              const updated = [...options];
              updated[index] = text;
              setOptions(updated);
            }}
          />
          <Feather
            name="x"
            size={18}
            color="gray"
            onPress={() => {
              //delete option based on index
              const updated = [...options];
              updated.splice(index, 1);
              setOptions(updated);
            }}
            style={{ position: "absolute", right: 10 }}
          />
        </View>
      ))}
      <Button title="Add Option" onPress={() => setOptions([...options, ""])} />
      <Button onPress={createPoll} title="Create Poll" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 5,
  },
  label: {
    marginTop: 10,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
});
