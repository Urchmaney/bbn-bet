import { Image, StyleSheet } from 'react-native';

export default function RoundBorderedImage ({ source, remote }) {
  if (remote) source = { uri: source }
  return (
    <Image style={styles.image} source={source }  />
  );
 } 

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    borderRadius: 20,
  }
})