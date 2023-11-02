import { Text, View, ScrollView, TouchableOpacity } from "react-native";

const ProfessionalExperience = () => {
  return (
    <ScrollView>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ marginTop: 10, fontWeight: 500 }}>
            Koyo Nations. Mobile Developer lagos | Jun 2023 - Present
          </Text>
          <Text style={{ marginTop: 10 }}>
            Developed mobile applications using React Native, ensuring high
            performance and user-friendly interfaces Collaborated with designers
            and product managers to translate requirements into technical
            specications Integrated APIs and external services to fetch data and
            implement features within the mobile apps Conducted thorough testing
            and debugging to identify and x software defects and performance
            issues Maintained code quality and optimized app performance through
            code reviews and continuous refactoring Participated in Agile
            development processes, including sprint planning, stand- ups, and
            retrospectives
          </Text>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ marginTop: 10, fontWeight: 500 }}>
            Decagon. FullStack Developer lagos | Jan 2021 - Jun 2023
          </Text>
          <Text style={{ marginTop: 10 }}>
            Designed and developed multiple web applications from conception to
            deployment using modern front-end technologies such as React, as
            helping back-end engineer with technology such as Node.js,
            Express.js, and MongoDB. Created and implemented RESTful APIs to
            ensure seamless communication between the client and server side of
            applications. Collaborated with cross-functional teams to ensure
            projects are delivered on time and to client specications. Debugged
            and tested code to identify and resolve technical issues. Created
            documentation and providing technical support to clients and team
            members. Wrote maintainable and extensible code in a team
            environment Stored, retrieved and manipulated data for close
            analysis of system capabilities
          </Text>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ marginTop: 10, fontWeight: 500 }}>
            Global Performance Index. Software Developer. lagos | Feb 2020 - Jan 2021
          </Text>
          <Text style={{ marginTop: 10 }}>
            Collaborated with cross-functional teams to ensure projects are
            delivered on time and to client specications. Debugged and tested
            code to identify and resolve technical issues. Creating
            documentation and providing technical support to clients and team
            members. Wrote maintainable and extensible code in a team
            environment Stored, retrieved and manipulated data for close
            analysis of system capabilities Designed and developed multiple web
            applications from conception to deployment using modern front-end
            technologies such as React, as helping back-end engineer with
            technology such as Node.js, Express.js, and MongoDB. Created and
            implemented RESTful APIs to ensure seamless communication between
            the client and server side of applications.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfessionalExperience;
