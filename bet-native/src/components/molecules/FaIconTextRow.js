import { StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function FaIconTextRow ({ text, faIcon }) {
  return(
    <View style={styles.row}>
      <FontAwesomeIcon icon={ faIcon } style={styles.icon} />
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 15,
    marginRight: 6
  },
  row: {
    flexDirection: 'row',
    padding: 4
  }
})