import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

const poll = {
  question: "React Native vs. Flutter",
  options: ["React Native", "Flutter"],
};

export default function PollDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [selected, setSelected] = useState("React Native");

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{poll.question}</Text>
      <View style={{ gap: 5 }}>
        {poll.options.map((option) => (
          <Pressable
            onPress={() => setSelected(option)}
            key={option}
            style={styles.optionContainer}
          >
            <Feather
              name={option === selected ? "check-circle" : "circle"}
              size={20}
              color={option === selected ? "green" : "gray"}
            />
            <Text>{option}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, gap: 20 },
  question: { fontSize: 20, fontWeight: "600" },
  optionContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});