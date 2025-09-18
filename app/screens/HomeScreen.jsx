import { Feather, Ionicons } from '@expo/vector-icons';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  const places = [
    {
      title: 'Taj Mahal',
      image: 'https://whc.unesco.org/uploads/thumbs/site_0252_0008-1000-666-20250108121530.jpg',
    },
    {
      title: 'Red Fort',
      image: 'https://cdn.britannica.com/75/152475-050-DA89FF0A/Red-Fort-Old-Delhi-India.jpg',
    },
    {
      title: 'India Gate',
      image: 'https://www.culturalindia.net/iliimages/India-Gate-ili-49-img-1.jpg',
    },
    {
      title: 'Qutub Minar',
      image: 'https://www.culturalindia.net/iliimages/Qutab-Minar-3.jpg',
    },
  ];

  const categories = ['Temples', 'Mountains', 'Museums', 'Rivers', 'Beaches'];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}></View> */}
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
        <Image 
          source={require("../../assets/images/astitv logo.png")} 
          style={styles.logoImage}
          resizeMode="contain"
        />
         <Text style={styles.logoText}>Astitva</Text>
        </View>
        <View style={styles.headerRight}>
          <Feather name="bell" size={22} color="#333" />
          <Feather name="user" size={22} color="#333" />
        </View>
      </View>

      {/* SEARCH */}
      <View style={styles.searchSection}>
        <Text style={styles.searchPrompt}>Where do you wanna go?</Text>
        <View style={styles.searchBox}>
          <Feather name="search" size={20} color="#aaa" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search destination"
            placeholderTextColor="#888"
          />
        </View>
      </View>

      {/* MAIN CONTENT */}
      <ScrollView contentContainerStyle={styles.mainContent} showsVerticalScrollIndicator={false}>
        {/* DESTINATIONS */}
        <View style={styles.destinationRow}>
          {places.map((place, index) => (
            <Animatable.View
              key={index}
              animation="fadeInUp"
              delay={index * 200}
              duration={600}
              style={styles.destinationCard}
            >
              <TouchableOpacity style={{ flex: 1 }}>
                <ImageBackground
                  source={{ uri: place.image }}
                  resizeMode="cover"
                  style={styles.cardImage}
                  imageStyle={{ borderRadius: 15 }}
                >
                  <View style={styles.cardOverlay}>
                    <Text style={styles.destinationText}>{place.title}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </Animatable.View>
          ))}
        </View>

        {/* CATEGORIES */}
        <View style={styles.categoriesSection}>
          <View style={styles.categoriesHeader}>
            <Text style={styles.categoriesTitle}>Categories</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryList}
          >
            {categories.map((cat, i) => (
              <Animatable.View
                key={i}
                animation="fadeInRight"
                delay={i * 150}
                duration={500}
                style={styles.categoryItem}
              >
                <View style={styles.categoryIconCircle}>
                  <Feather name="map-pin" size={24} color="#555" />
                </View>
                <Text style={styles.categoryText}>{cat}</Text>
              </Animatable.View>
            ))}
          </ScrollView>
        </View>
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
    </View>
     </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 45,   // adjust as needed
    height: 45,
    marginRight: 8,
  },

  logoText: {
    marginLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  searchSection: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  searchPrompt: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: 25,
    paddingHorizontal: 15,
  },
  searchIcon: {
    marginRight: 20,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
  },
  mainContent: {
    padding: 20,
  },
  destinationRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  destinationCard: {
    width: '45%',
    height: 170,
    marginBottom: 12,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
  },
  cardImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cardOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  destinationText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoriesSection: {
    marginTop: 15,
  },
  categoriesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  categoriesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },
  seeAllText: {
    color: '#4A90E2',
    fontWeight: '600',
  },
  categoryList: {
    paddingVertical: 5,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryIconCircle: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: '#E8F0FE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
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

