import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import wallContext from "../context/wallpaper.context";
const Wallpapers = () => {
  const { wall } = useContext(wallContext);
  const navigation = useNavigation();

  const handleTouch = (url) => {
    navigation.navigate("image", { url: url });
  };

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        {wall.length > 0 ? (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {wall.map((ele) => {
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
                  <TouchableOpacity
                    onPress={() => handleTouch(ele.urls.regular)}
                  >
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
