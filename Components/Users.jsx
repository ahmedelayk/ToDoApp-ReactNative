import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Button,
} from 'react-native';

const DATA = [
  {
    title: 'A',
    data: ['Abdallah', 'Akram', 'Ahmed'],
  },
  {
    title: 'B',
    data: ['Bahaa', 'Bavly'],
  },
  {
    title: 'D',
    data: ['Diaa', 'Dola'],
  },
  {
    title: 'E',
    data: ['Eslam', 'Essam', 'Elsayed'],
  },
];

const Users = ({navigation}) => (
  <SafeAreaView style={styles.container} >
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item+index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
    <Button
        title="To Do App"
        onPress={() => navigation.navigate('todo')}
      />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight+20,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#EEE',
    padding: 10,
    borderRadius: 6,
    marginVertical: 8,
  },
  header: {
    padding: 10,
    borderRadius: 6,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#AAA',
  },
  title: {
    fontSize: 18,
  },
});

export default Users;