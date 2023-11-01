import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import Projects from "../../Components/Projects/Projects";

const DummyData = [
  {
    id: "1",
    title: "Chicago City Sports",
    description:
      "This project is an ecommerce website and mobile app for sports enthusiasts to buy sports- related products like equipment, clothing, accessories, and more. I built this website using React, React Native(mobile), CSS3, and HTML for styling and layout, and Node.js and Express for the back-end. The database used is MongoDB.",
  },
  {
    id: "2",
    title: "koyo App",
    description:
      "This project is an ecommerce Mobile App that Supports group buying. Users can come together and join their money to buy products. I built this mobile application with React Native for the front-end, and Node.js and Express for the back-end. The database used is Postgresql.",
  },
  {
    id: "3",
    title: "Rings To Perfection",
    description:
      "This project involves building a fully functional ecommerce website that sells jewelry products. I built this website using React, CSS, HTML, MongoDB, Node, CSS3and Express. The website will allow customers to browse through different categories of jewelry products, select their preferred product(s), and make payments for their orders.",
  },
];

const Profile = () => {
  const [data, setData] = useState([]);
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
      <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 20 }}>Projects</Text>
        {DummyData.map((item) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default Profile;
