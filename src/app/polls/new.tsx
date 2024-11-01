import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { Redirect, router, Stack } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { useAuth } from "../providers/AuthProvider";
import { supabase } from "../../lib/supabase";

export default function CreatePoll() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [error, setError] = useState("");

  const { user } = useAuth();

  const createPoll = async () => {
    setError("");
    if (!question) {
      setError("Please enter a question");
      return;
    }
    const validOptions = options.filter((o) => !!o);
    if (validOptions.length < 2) {
      setError("Please enter at least two options");
      return;
    }

    const { data, error } = await supabase
      .from("polls")
      .insert([{ question, options: validOptions }])
      .select();

    if (error) {
      Alert.alert("Failed to create the poll", error.message);
      return;
    }
    router.back();
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
        <View key={index} style={{ justifyContent: "center" }}>
          <TextInput
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
      <Text style={{ color: "crimson" }}>{error}</Text>
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
