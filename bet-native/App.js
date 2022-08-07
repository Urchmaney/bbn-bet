import { StyleSheet, Image, Text, ScrollView, View, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown'

const DATA = [
  {
    id: 1,
    name: 'namke'
  },
  {
    id: 2,
    name: 'namke'
  },
  {
    id: 3,
    name: 'namke'
  },
  {
    id: 4,
    name: 'namke'
  },
  {
    id: 5,
    name: 'namke'
  },
  {
    id: 6,
    name: 'namke'
  },
  {
    id: 7,
    name: 'namke'
  },
  {
    id: 8,
    name: 'namke'
  },
  {
    id: 9,
    name: 'namke'
  },
  {
    id: 10,
    name: 'namke'
  }
]

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const headerComp = () => (
  <ScrollView
    stickyHeaderIndices={[2]}
  >
    <Text>BBNaija </Text>
    <View>
      <Image style={styles.banner} source={require('./bbn.jpg')}/>
    </View>
  </ScrollView>
)

export default function App() {
  const renderItem = ({ item, index }) => {
    if (index == 0) return <Text style={styles.welcome_text}> Welcome Micheal </Text>

    return  <Item title={item.name} />
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profile_container}>
        <FontAwesomeIcon icon={ faCaretDown } style={styles.drop_down_icon} />
        <Image style={styles.profile_img} source={require('./me.jpg')} />
      </TouchableOpacity>
        <View>
          <FlatList
              style={styles.list_container}
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              ListHeaderComponent={headerComp}
              stickyHeaderIndices={[1]}
              showsVerticalScrollIndicator={false}
          />
        </View>
        
      
      
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
    borderRadius: 20,
    zIndex: 3
  },
  profile_container: {
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    position: 'absolute',
    right: 0,
    zIndex: 10
  },
  container: {
    padding: 20,
    paddingTop: 10,
    marginTop: 50,
    zIndex: 1
  },
  drop_down_icon: {
    marginTop: 8,
    marginLeft: 4,
  },
  welcome_text: {
    backgroundColor: 'white',
    zIndex: 2,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  }
});

