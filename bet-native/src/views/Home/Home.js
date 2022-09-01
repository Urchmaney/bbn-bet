import { useState } from 'react'
import { StyleSheet, Image, Text, ScrollView, View, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretDown, width } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons/faBoxArchive';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faSliders } from '@fortawesome/free-solid-svg-icons/faSliders';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons/faArrowRightFromBracket';

import FaIconTextRow from '../../../src/components/molecules/FaIconTextRow';
import RoundBorderedImage from '../../../src/components/atoms/roundBorderedImage';
import BetCard from '../../../src/components/organism/betCard';

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
    <Text>BBNaija Nigeria 1 </Text>
    <View>
      <Image style={styles.banner} source={require('./bbn.jpg')}/>
    </View>
  </ScrollView>
)

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const renderItem = ({ item, index }) => {
    if (index == 0) return <Text style={styles.welcome_text}> Hello Micheal </Text>

    return  <BetCard title={item.name} stake={40} returns={344} />
  }

  return (
    <View style={{ backgroundColor: '#eeeeee'}}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.profile_container} onPress={() => setShowMenu(!showMenu)}>
          <FontAwesomeIcon icon={ faCaretDown } style={styles.drop_down_icon} />
          <RoundBorderedImage source={require('./me.jpg')} style={styles.profile_img} />
        </TouchableOpacity>
        {showMenu && 
          <View style={styles.drop_down_menu}>
            <FaIconTextRow text="Profile Settings" faIcon={faSliders} />
            <FaIconTextRow text="Log Out" faIcon={faArrowRightFromBracket} />
          </View>
        }
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
            <View style={styles.create_icon}>
            <FontAwesomeIcon icon={faPlus} />
            </View>
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
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#eeeeee',
    zIndex: 2,
    paddingBottom: 20
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
  },
  create_icon: {
    borderColor: '#638475',
    fontSize: 20,
    borderWidth: 2,
    padding: 7,
    borderRadius: 20
  }
});

