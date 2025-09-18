import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function TajMahal() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Taj Mahal Image */}
      <Image
        source={{ uri: "https://whc.unesco.org/uploads/thumbs/site_0252_0008-1000-666-20250108121530.jpg" }}
        style={styles.image}
      />

      {/* Title */}
      <Text style={styles.title}>Taj Mahal</Text>

      {/* Description */}
      <Text style={styles.description}>
        The Taj Mahal, located in Agra, India, is one of the Seven Wonders of the World. 
        It was built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. 
        This white marble mausoleum is an architectural masterpiece and a symbol of eternal love.
      </Text>

      {/* AR Button */}
      <View style={styles.buttonContainer}>
        <Button title="View with AR" onPress={() => alert("AR View Coming Soon!")} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "justify",
    lineHeight: 22,
    marginBottom: 20,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 10,
  },
});