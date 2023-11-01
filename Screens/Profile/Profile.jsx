import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [user] = useState("otonye77");
  const getRepos = async () => {
    let response = await axios.get(
      `https://api.github.com/users/${user}/repos?per_page=6&sort=updated`
    );
    setData(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getRepos();
  }, [user]);
  const goToProject = () => {
    navigation.navigate("Projects")
  }
  return (
    <ScrollView>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            marginVertical: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/profile.jpeg")}
            style={{ width: 150, height: 150, borderRadius: 75 }}
          />
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 20 }}>Objectives</Text>
          <Text style={{ marginTop: 10 }}>
            I am a highly skilled software developer with expertise in Html,
            Css, Javascript, Typescript, React, Express, Node, Sequelize,
            MongoDB, Docker. my objective is to leverage my skills and
            experience to contribute to the development of cutting-edge software
            solutions. With a strong passion for creating robust and scalable
            applications, I am dedicated to delivering high-quality results that
            meet or exceed client expectations. I am seeking a challenging role
            that will allow me to utilize my technical skills and creativity to
            drive innovation and achieve business objectives.
          </Text>
        </View>
      </View>
      <TouchableOpacity style={{marginTop: 15,  marginHorizontal: 20,}} onPress={goToProject}>
          <View style={{ backgroundColor: "black", padding: 15, borderRadius: 5 }}>
            <Text style={{ color: "white", textAlign: "center" }}>Go to Project</Text>
          </View>
        </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;
