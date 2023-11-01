import { useState } from "react";
import { Text, TouchableOpacity, View, Alert} from "react-native";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();


  const handleChange = (field, value) => {
    if (field === "email") {
      setEmail(value);
    } else if (field === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = () => {
    if(!email || !password){
        Alert.alert("No field can be empty");
        return;
    }
    navigation.navigate("Profile", {
        email
    })
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ width: "90%" }}>
        <Text style={{ textAlign: "center", fontSize: 25 }}>Register</Text>
        <View style={{ width: "100%", marginTop: 10 }}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={(text) => handleChange("email", text)}
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
