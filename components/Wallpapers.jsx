import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, ScrollView, Image,TouchableOpacity, Alert } from "react-native";
import { api } from "../private";
const Wallpapers = () => {
  const [state, setState] = useState([]);
    const navigation = useNavigation()
  const fetchWallpaper = async () => {
    let responce = await fetch(api);
    let wall = await responce.json();
    setState(wall);
  };
  const handleTouch = (url)=>{
    navigation.navigate('image',{url:url})
  }
  useEffect(() => {
    fetchWallpaper();
  }, []);
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        {state.length > 0 ? (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {state.map((ele) => {
              return (
                <View
                  style={{
                    maxHeight: 250,
                    maxWidth: 176,
                    width: "100%",
                    height: "100%",
                    margin: 10,
                    borderRadius: 8,
                    backgroundColor: "white",
                    elevation: 2,
                  }}
                  key={ele.id}
                >
                <TouchableOpacity onPress={()=>handleTouch(ele.urls.regular)}>
                  <Image
                    style={{ width: "100%", height: "100%", borderRadius: 8 }}
                    source={{ uri: ele.urls.regular }}
                    alt={"image"}
                  />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        ) : (
          <View>
            <Text>Loading...</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Wallpapers;
