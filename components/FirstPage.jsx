import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { generateStory } from "./AIagent";
import StoryScreen from "./StoryScreen";

export default function GradientScreen() {

  const [storyIdea, setStoryIdea] = useState("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);
  const [screen, setScreen] = useState("home"); 

  const handleGenerateStory = async () => {
    if (!storyIdea.trim()) return;

    setLoading(true);

    const result = await generateStory(storyIdea);

    setStory(result);
    setStoryIdea("");
    setLoading(false);

    setScreen("story"); 
  };


  if (screen === "story") {
    return (
      <StoryScreen
        story={story}
        goBack={() => setScreen("home")}
      />
    );
  }

  return (
    <LinearGradient
      colors={["#E0F7FA", "#FCE7F3", "#EDE9FE"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <View className="justify-center items-center">
        <Text className="text-black text-2xl font-bold mt-[70px]">
          SoulStories
        </Text>
      </View>

      <Text className="text-black text-5xl mt-6 ml-4 text-center">
        Unleash Your Imagination
      </Text>

      <Text className="text-black text-xl mt-5 text-center">
        AI Powered Stories
      </Text>

      <Image
        source={require("../assets/Logo.png")}
        className="w-[35%] h-[25%] self-center mt-5"
      />

      <View className="mt-10 mx-4 p-4 bg-white rounded-lg shadow-md border-2 border-gray-300">
        <TextInput
          placeholder="Enter your story idea"
          placeholderTextColor="#9CA3AF"
          value={storyIdea}
          onChangeText={setStoryIdea}
        />
      </View>

      <TouchableOpacity
        onPress={handleGenerateStory}
        className="mt-10 self-center w-3/4 p-3 bg-black rounded-full border-2 border-gray-300"
      >
        <Text className="text-white text-center text-lg font-bold">
          {loading ? "Generating..." : "Generate Story"}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
