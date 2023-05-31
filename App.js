import { SafeAreaView, Text, Platform } from 'react-native';
import styles from './Styles';
import Users from './Components/Users';
import ToDoList from './Components/ToDoApp/ToDoList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>


      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="users" component={Users}
            options={{
              headerTitle: "Users",
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontSize: 22
              }
            }}
          />
          <Stack.Screen name="todo" component={ToDoList}
            options={{
              headerTitle: "To Do List",
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontSize: 22
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <SafeAreaView style={{
        marginTop: Platform.OS === 'android' ? 40 : 0, paddingHorizontal: 20
      }}>
        <ToDoList />
      </SafeAreaView > */}
    </>
  );
}

