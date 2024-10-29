import React from "react";
import { Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native";

export default function HomeScreen() {
  const polls = [1, 2, 3];

  return (
    <>
      <Stack.Screen options={{ title: "Polls" }} />
      <FlatList
        data={polls}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <View style={styles.pollContainer}>
            <Text style={styles.pollTitle}>
              Are we ready to kick some butt?
            </Text>
          </View>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 5,
  },
  pollContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  pollTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
