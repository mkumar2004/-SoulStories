import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function StoryScreen({ story, goBack }: any) {
  return (
    <LinearGradient
      colors={["#EDE9FE", "#FCE7F3"]}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 25 }}>
          Your Story
        </Text>

        <Text style={{ fontSize: 16, lineHeight: 24 }}>
          {story}
        </Text>

        <TouchableOpacity
          onPress={goBack}
          style={{
            marginTop: 30,
            padding: 12,
            backgroundColor: "black",
            borderRadius: 30,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            Go Back
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}
