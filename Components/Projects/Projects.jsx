import { Avatar, Button, Card, Text, TouchableOpacity } from "react-native-paper";

const Projects = ({title, description}) => {
    return (
        <TouchableOpacity>
        <Card style={{ marginBottom: 30 }}>
          <Card.Cover />
          <Card.Content>
            <Text variant="titleMedium">{title}</Text>
            <Text variant="bodyMedium">{description}</Text>
            <Text variant="bodyMedium"></Text>
            <Text variant="bodyMedium">rating:</Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    )
}

export default Projects;