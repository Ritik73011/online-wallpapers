import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import Wallpapers from "./Wallpapers";

const Home = () => {
  const [state, setState] = useState([
    { cat: "girls" },
    { cat: "couples" },
    { cat: "nature" },
    { cat: "animals" },
    { cat: "birds" },
    { cat: "space" },
    { cat: "cars" },
  ]);
  const handlePress = (text) => {};
  return (
    <View style={{ flex: 1 }}>
      {/*Category section start*/}
      <View style={styles.horizontal}>
        <ScrollView horizontal={true}>
          {state.map((ele, idx) => {
            return (
              <TouchableOpacity
                key={idx + 1}
                style={styles.category}
                onPress={() => handlePress(ele.cat)}
              >
                <Text>{ele.cat}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      {/*Category section end*/}

      {/*Wallpaper Section Start*/}
          <Wallpapers/>
      {/*Wallpaper Section END*/}
    </View>
  );
};

const styles = StyleSheet.create({
  horizontal: {
    width: "100%",
    maxHeight: 52,
    height: "100%",
  },
  category: {
    backgroundColor: "white",
    margin: 8,
    paddingBottom: 6,
    paddingTop: 6,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 16,
    textTransform: "capitalize",
    elevation:3
  },
});

export default Home;
