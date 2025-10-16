import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>ASTITV</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Ionicons name="person-circle-outline" size={28} color="black" style={{ marginLeft: 10 }} />
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>Where do you wanna go?</Text>

      {/* Search bar */}
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Searching destination..."
          style={styles.input}
        />
        <TouchableOpacity style={styles.searchBtn}>
          <Ionicons name="search" size={22} color="white" />
        </TouchableOpacity>
      </View>

      {/* Filter buttons */}
      <View style={styles.filterRow}>
        <TouchableOpacity style={styles.filterBtn}><Text>ALL</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}><Text>Popular</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}><Text>Recommendation</Text></TouchableOpacity>
      </View>

      {/* Featured places */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
        <View style={styles.card}>
          <Image
            source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Red_Fort_in_Delhi_03-2016_img3.jpg" }}
            style={styles.cardImage}
          />
        </View>
        <View style={styles.card}>
          <Image
            source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg" }}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Taj Mahal, Agra</Text>
        </View>
      </ScrollView>

      {/* Categories */}
      <View style={styles.categoryHeader}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Categories</Text>
        <Text style={{ color: "blue" }}>See all</Text>
      </View>

      <View style={styles.categoryRow}>
        <View style={styles.categoryItem}>
          <View style={styles.categoryCircle} />
          <Text>Temples</Text>
        </View>
        <View style={styles.categoryItem}>
          <View style={styles.categoryCircle} />
          <Text>Museums</Text>
        </View>
        <View style={styles.categoryItem}>
          <View style={styles.categoryCircle} />
          <Text>Beach</Text>
        </View>
      </View>

      {/* Bottom navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="home-outline" size={24} color="black" />
        <Ionicons name="heart-outline" size={24} color="black" />
        <Ionicons name="scan-outline" size={28} color="black" />
        <Ionicons name="albums-outline" size={24} color="black" />
        <Ionicons name="menu-outline" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 15 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  logo: { fontWeight: "bold", fontSize: 20, color: "#333" },
  headerIcons: { flexDirection: "row" },

  title: { fontSize: 18, fontWeight: "bold", textAlign: "center", marginBottom: 10 },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  input: { flex: 1, paddingVertical: 8 },
  searchBtn: {
    backgroundColor: "#2c2c6c",
    padding: 8,
    borderRadius: 8,
    marginLeft: 5,
  },

  filterRow: { flexDirection: "row", justifyContent: "center", marginBottom: 10 },
  filterBtn: {
    backgroundColor: "#e5e5e5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginHorizontal: 5,
  },

  card: {
    marginRight: 12,
    width: 150,
    borderRadius: 12,
    overflow: "hidden",
  },
  cardImage: { width: "100%", height: 120, borderRadius: 12 },
  cardText: {
    position: "absolute",
    bottom: 8,
    left: 8,
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 6,
    borderRadius: 4,
  },

  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  categoryRow: { flexDirection: "row", justifyContent: "space-between" },
  categoryItem: { alignItems: "center" },
  categoryCircle: {
    width: 60,
    height: 60,
    backgroundColor: "#ddd",
    borderRadius: 30,
    marginBottom: 5,
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
  },
});
