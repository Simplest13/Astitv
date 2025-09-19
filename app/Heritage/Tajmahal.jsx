import { Feather, Ionicons } from '@expo/vector-icons';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


export default function TajMahal() {
  const handleARPress = () => {
    // Add your AR navigation logic here
    alert("AR View Coming Soon!");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Arrow and Title Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {/* Add back navigation logic here */}}>
          {/* <Text style={styles.backButton}>←</Text> */}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Taj Mahal</Text>
      </View>

      {/* Main Image Card */}
      <View style={styles.imageCard}>
        <Image
          source={{ uri: "https://whc.unesco.org/uploads/thumbs/site_0252_0008-1000-666-20250108121530.jpg" }}
          style={styles.image}
        />
      </View>

      {/* Content Card with Text */}
      <View style={styles.contentCard}>
        {/* <Text style={styles.title}>Taj Mahal</Text> */}
        <Text style={styles.description}>
          The Taj Mahal, located in Agra, India, is one of the Seven Wonders of the World. 
          It was built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. 
          This white marble mausoleum is an architectural masterpiece and a symbol of eternal love. A UNESCO World Heritage Site, it attracts millions of visitors, who marvel at its intricate carvings, inlaid stonework, and perfect symmetry. The monument stands as a testament to the rich history and artistic heritage of the Mughal Empire.
        </Text>
      </View>

      {/* AR Button at the bottom */}
      <TouchableOpacity style={styles.buttonContainer} onPress={handleARPress}>
        <Text style={styles.buttonText}>View with AR</Text>
      </TouchableOpacity>

    </ScrollView>
                {/* BOTTOM NAVIGATION */}
      <View style={styles.bottomNav}>
        {[
          { icon: 'home-outline', label: 'Home' },
          { icon: 'compass', label: 'Explore' },
          { icon: 'aperture', label: 'Scan' },
          { icon: 'calendar', label: 'Plan' },
          { icon: 'settings', label: 'Settings' },
        ].map((item, i) => (
          <TouchableOpacity key={i} style={styles.navItem}>
            {item.icon.includes('outline') ? (
              <Ionicons name={item.icon} size={24} color="#555" />
            ) : (
              <Feather name={item.icon} size={24} color="#555" />
            )}
            <Text style={styles.navText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#EFEFEF", // Light grey background
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    fontSize: 28,
    fontWeight: "bold",
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  imageCard: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 250,
  },
  contentCard: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
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
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "#DAA520", // A golden color for the button
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 4,
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,
  },
});