import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Text,
  Button,
} from "react-native";
import wallContext from "../context/wallpaper.context";
const Wallpapers = () => {
  const [page,setPage] = useState(1);
  const { wall } = useContext(wallContext);
  const navigation = useNavigation();

  const handleTouch = (url) => {
    navigation.navigate("image", { url: url });
  };
  const handlePrev = ()=>{
    
  }
  const handleNext = ()=>{

  }

  const WallView = ({ wall }) => {
    return (
      <TouchableOpacity
        style={{
          width: "46%",
          alignItems: "center",
          margin: "2%",
          backgroundColor: "white",
          elevation: 2,
          borderRadius: 8,
        }}
        onPress={() => handleTouch(wall.urls.regular)}
      >
        <Image
          style={{ width: "100%", height: 250, borderRadius: 8 }}
          source={{ uri: wall.urls.regular }}
          alt={"image"}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex:1}}>
      <FlatList
        numColumns={2}
        data={wall}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <WallView wall={item} />}
      ></FlatList>
      <View style={{width:"100%",height:48,backgroundColor:"white"}}>
        <View style={{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
          <Button onPress={handlePrev} title="PREV"/>
          <Button onPress={handleNext} title="NEXT"/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Wallpapers;
