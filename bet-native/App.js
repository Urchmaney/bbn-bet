import { useState } from 'react'
import { StyleSheet, Image, Text, ScrollView, View, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretDown, width } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons/faBoxArchive'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faSliders } from '@fortawesome/free-solid-svg-icons/faSliders'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons/faArrowRightFromBracket'

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
  const [showMenu, setShowMenu] = useState(false);
  const renderItem = ({ item, index }) => {
    if (index == 0) return <Text style={styles.welcome_text}> Welcome Micheal </Text>

    return  <Item title={item.name} />
  }

  return (
    <View style={{ backgroundColor: '#eeeeee'}}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.profile_container} onPress={() => setShowMenu(!showMenu)}>
          <FontAwesomeIcon icon={ faCaretDown } style={styles.drop_down_icon} />
          <Image style={styles.profile_img} source={require('./me.jpg')} />
        </TouchableOpacity>
        { showMenu && <View style={styles.drop_down_menu}>
          <View style={styles.menu_section}>
            <FontAwesomeIcon icon={ faSliders } style={styles.menu_icon} />
            <Text> Profile Settings</Text>
          </View>

          <View style={styles.menu_section}>
            <FontAwesomeIcon icon={ faArrowRightFromBracket } style={styles.menu_icon} />
            <Text>Log Out</Text>
          </View>
        </View> }
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
      <View style={styles.footer_container}>
          <TouchableOpacity style={styles.footer_section}>
            <FontAwesomeIcon icon={ faHome }  style={styles.footer_icon} />
            <Text style={styles.footer_text}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.footer_section}>
            <FontAwesomeIcon icon={ faBoxArchive }  style={styles.footer_icon}/>
            <Text style={styles.footer_text}>Placed Bet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footer_create_container}>
            <FontAwesomeIcon icon={faPlus} />
          </TouchableOpacity>
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
  drop_down_menu: {
    position: 'absolute',
    width: 150,
    right: 0,
    top: 35,
    zIndex: 11,
    padding: 10,
    backgroundColor: 'white'
  },
  menu_icon: {
    width: 15,
    marginRight: 6
  },
  menu_section: {
    flexDirection: 'row',
    padding: 4
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
  }, 
  footer_container: {
    padding: 10,
    position: 'absolute',
    width: '100%',
    height: 50,
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#638475',
    zIndex: 2,
    justifyContent: 'space-between'
  },
  footer_section: {
    color: 'white',
    width: 120,
    textAlign: 'center',
    alignItems: 'center',
  },
  footer_icon: {
    color: 'white'
  },
  footer_text: {
    color: 'white'
  },
  footer_create_container: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 30,
    top: -20,
left: 155,
    backgroundColor: '#eeeeee',
    alignItems:'center',
    justifyContent: 'center',
  }
});

