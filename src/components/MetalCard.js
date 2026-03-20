import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

export default function MetalCard({ data, loading, error, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{data?.name}</Text>

      {loading && <ActivityIndicator />}

      {error && <Text style={styles.error}>Error loading</Text>}

      {!loading && !error && (
        <>
          <Text style={styles.price}>₹ {data?.price ?? "--"}</Text>
          <Text style={styles.time}>{data?.timestamp ?? ""}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    marginTop: 5,
  },
  time: {
    color: "gray",
  },
  error: {
    color: "red",
  },
});
