import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
const DummyData = [
  {
    id: "1",
    title: "Chicago City Sports",
    description:
      "This project is an ecommerce website and mobile app for sports enthusiasts to buy sports- related products like equipment, clothing, accessories, and more. I built this website using React, React Native(mobile), CSS3, and HTML for styling and layout, and Node.js and Express for the back-end. The database used is MongoDB.",
    image: require("../../assets/citysports.jpeg"),
  },
  {
    id: "2",
    title: "koyo App",
    description:
      "This project is an ecommerce Mobile App that Supports group buying. Users can come together and join their money to buy products. I built this mobile application with React Native for the front-end, and Node.js and Express for the back-end. The database used is Postgresql.",
    image: require("../../assets/koyo.png"),
  },
  {
    id: "3",
    title: "Rings To Perfection",
    description:
      "This project involves building a fully functional ecommerce website that sells jewelry products. I built this website using React, CSS, HTML, MongoDB, Node, CSS3and Express. The website will allow customers to browse through different categories of jewelry products, select their preferred product(s), and make payments for their orders.",
    image: require("../../assets/rings.jpeg"),
  },
];

const Projects = () => {
    return (
      <ScrollView>
      <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
      {DummyData.map((item) => (
        <TouchableOpacity key={item.id} style={styles.card}>
          <Image source={item.image} style={{ width: "100%", height: 200 }} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </TouchableOpacity>
      ))}
    </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
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
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    marginTop: 10,
  },
});

export default Projects;