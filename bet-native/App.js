import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown'

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profile_container}>
        <FontAwesomeIcon icon={ faCaretDown } style={styles.drop_down_icon} />
        <Image style={styles.profile_img} source={require('./me.jpg')} />
      </TouchableOpacity>
      <View>
        <Image style={styles.banner} source={require('./bbn.jpg')}/>
      </View>
      <Text>
        Welcome Micheal
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 9,
    marginTop: 10
  },
  profile_img: {
    height: 30,
    width: 30,
    borderRadius: 20
  },
  profile_container: {
    flexDirection: "row-reverse",
    flexWrap: "wrap",
  },
  container: {
    padding: 20,
    paddingTop: 50
  },
  drop_down_icon: {
    marginTop: 8,
    marginLeft: 4,
  }
});

