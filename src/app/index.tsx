import React from "react";
import { Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  const polls = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  return (
    <>
      <Stack.Screen options={{ title: "Polls" }} />
      <FlatList
        data={polls}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <Link href={`/polls/${item.id}`} style={styles.pollContainer}>
            <Text style={styles.pollTitle}>
              {item.id} Are we ready to kick some butt?
            </Text>
          </Link>
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
