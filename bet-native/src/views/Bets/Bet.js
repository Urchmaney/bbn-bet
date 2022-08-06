import { StyleSheet, Image, Text, View } from 'react-native';

export default function Bets() {
  return (
    <View>
      <View>
        <Image style={styles.img} source={require('./bbn.jpg')}/>
      </View>
      <Text>
        Welcome Micheal
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 200,
  },
});
