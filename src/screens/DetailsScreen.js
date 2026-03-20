import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetailsScreen({ route }) {
  const { metal } = route.params;

  if (!metal) {
    return <Text>No Data Available</Text>;
  }

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{metal.name} Details</Text>

      <Text>Price: ₹ {metal.price}</Text>
      <Text>Previous Open: ₹ {metal.open}</Text>
      <Text>Previous Close: ₹ {metal.close}</Text>

      <Text>Date: {currentDate}</Text>
      <Text>Time: {currentTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
