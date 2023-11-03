import React from "react";
import { Image, Text } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Image source={require(`./assets/favicon.png`)} />
      <TextInput
        placeholder="Escriba para convertir en mayuscula"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <Text>{text.toUpperCase()}</Text>
      <StatusBar style="auto" />
    </View>
  );

  /* return (
    <ScrollView>
      <Text>BlackWidow</Text>
      <Image source={require("./assets/BlackWidow.png")} />
      <Text>Captain</Text>
      <Image source={require("./assets/Captain.png")} />
      <Text>Hawkeye</Text>
      <Image source={require("./assets/Hawkeye.png")} />
      <Text>Hulk</Text>
      <Image source={require("./assets/Hulk.png")} />
      <Text>IronMan</Text>
      <Image source={require("./assets/IronMan.png")} />
      <Text>Thor</Text>
      <Image source={require("./assets/Thor.png")} />
    </ScrollView>
  ); */
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
}); */
