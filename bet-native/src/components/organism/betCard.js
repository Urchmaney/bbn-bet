import { StyleSheet, Text, View, Image } from 'react-native';
import RoundBorderedImage from '../atoms/roundBorderedImage';

export default function BetCard ({ title, stake, returns, imgUrl }) {

  return (
    <View style={styles.card_container}>
      <View style={styles.title_container}>
        <RoundBorderedImage source={'https://www.pngkey.com/png/full/937-9378547_itachi-uchiha-itachi-uchiha-anbu.png'} remote />
        <Text> {title} </Text>
      </View>
      <View style={styles.text_container}>
        <Text> Stake: {stake}</Text>
        <Text> Return: N{returns}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card_container: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10
  },
  title_container: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 20
  },
  text_container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})