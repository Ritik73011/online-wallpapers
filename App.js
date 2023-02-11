import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './components/Home';
import SingleWall from './components/SingleWall';
import wallContext from './context/wallpaper.context'
import { api } from './private'
import { useEffect, useState } from 'react';
const Stack = createNativeStackNavigator();
export default function App() {
  const [wall, setWall] = useState([]);

  const fetchWallpaper = async () => {
    let responce = await fetch(api);
    let wall = await responce.json();
    setWall(wall);
  };
  const setWallpapers = (wall) => {
    setWall(wall);
  }
  useEffect(() => {
    fetchWallpaper();
  }, [])
  return (
    <NavigationContainer>
      <wallContext.Provider value={{ wall, setWallpapers }}>
        <Stack.Navigator>
          <Stack.Screen name='home' component={Home} options={{ title: "Online Wallpapers" }} />
          <Stack.Screen name='image' component={SingleWall} options={{ title: "Single Wall" }} />
        </Stack.Navigator>
      </wallContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
