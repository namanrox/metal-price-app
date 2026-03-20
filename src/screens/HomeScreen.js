import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import MetalCard from "../components/MetalCard";
import { fetchMetalPrice } from "../services/api";
import { METALS } from "../constants/metals";

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    METALS.forEach((metal) => {
      loadMetal(metal.name);
    });
  }, []);

  const loadMetal = async (metalName) => {
    setLoading((prev) => ({ ...prev, [metalName]: true }));
    setError((prev) => ({ ...prev, [metalName]: false }));

    try {
      const result = await fetchMetalPrice(metalName);
      setData((prev) => ({ ...prev, [metalName]: result }));
    } catch (err) {
      setError((prev) => ({ ...prev, [metalName]: true }));
    } finally {
      setLoading((prev) => ({ ...prev, [metalName]: false }));
    }
  };

  return (
    <FlatList
      data={METALS}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <MetalCard
          data={data[item.name]}
          loading={loading[item.name]}
          error={error[item.name]}
          onPress={() =>
            navigation.navigate("Details", { metal: data[item.name] })
          }
        />
      )}
    />
  );
}
