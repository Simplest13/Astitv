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
        <Text style={styles.headerTitle}>Qutub Minar</Text>
      </View>

      {/* Main Image Card */}
      <View style={styles.imageCard}>
        <Image
          source={{ uri: "https://www.culturalindia.net/iliimages/Qutab-Minar-3.jpg" }}
          style={styles.image}
        />
      </View>

      {/* Content Card with Text */}
      <View style={styles.contentCard}>
        {/* <Text style={styles.title}>Taj Mahal</Text> */}
        <Text style={styles.description}>
          The Qutub Minar, located in Delhi, India, is the tallest brick minaret in the world.
It was commissioned by Qutb-ud-din Aibak in 1193 and later completed by his successors.
This UNESCO World Heritage Site is an outstanding example of Indo-Islamic architecture, featuring intricate carvings and verses from the Quran.
Surrounded by historical monuments in the Qutub complex, it stands as a symbol of Delhi’s medieval past.
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