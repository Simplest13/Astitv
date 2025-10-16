import {
    Feather,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';

const Header = () => {
  return (
          <View style={styles.header}>
        <View style={styles.headerLeft}>
        <Image 
          source={require("../../Astitv/assets/images/astitv logo.png")} 
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
    );
    };

    const styles = StyleSheet.create({
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
});

export default Header;
