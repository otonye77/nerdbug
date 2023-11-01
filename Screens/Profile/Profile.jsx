import { Text, View, Image } from "react-native";

const Profile = () => {
  return (
    <View>
      <Image
        source={require("../../assets/profile.jpeg")}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default Profile;
