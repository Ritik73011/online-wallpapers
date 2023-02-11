import { useRoute } from "@react-navigation/native"
import { Button, Image, Text, View } from "react-native"

const SingleWall = () => {
    const route = useRoute();
    const {url} = route.params
  return (
    <View style={{flex:1}}>
        <View style={{flex:1}}>
            <Image style={{width:"100%",height:"100%"}} source={{uri:url}}/>
        </View>
        <View style={{width:"100%",display:"flex",justifyContent:"space-around",margin:8,flexDirection:"row",gap:8}}>
            <Button title="download" />
            <Button title="set wallpaper"/>
        </View>
    </View>
  )
}

export default SingleWall