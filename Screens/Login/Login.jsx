import { useState } from "react";
import { Text, TouchableOpacity, View, Alert} from "react-native";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();


  const handleChange = (field, value) => {
    if (field === "username") {
      setUsername(value);
    } else if (field === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = () => {
    if(!username || !password){
        Alert.alert("No field can be empty");
        return;
    }
    navigation.navigate("Profile", {
        username
    })
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ width: "90%" }}>
        <Text style={{ textAlign: "center", fontSize: 25 }}>Register</Text>
        <View style={{ width: "100%", marginTop: 10 }}>
          <TextInput
            label="Username"
            value={username}
            onChangeText={(text) => handleChange("username", text)}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <TextInput
            label="Password"
            value={password}
            onChangeText={(text) => handleChange("password", text)}
          />
        </View>
        <TouchableOpacity style={{marginTop: 15}} onPress={handleSubmit}>
          <View style={{ backgroundColor: "black", padding: 15, borderRadius: 5 }}>
            <Text style={{ color: "white", textAlign: "center" }}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
