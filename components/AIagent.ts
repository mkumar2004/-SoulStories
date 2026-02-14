export async function generateStory(prompt: string) {
  try {
    const API_KEY = process.env.EXPO_PUBLIC_OPENROUTER_API_KEY;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
        "HTTP-Referer": "http://localhost:8081", 
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo", 
        messages: [
          {
            role: "user",
            content: `Write a creative short story about: ${prompt}`,
          },
        ],
      }),
    });

    const data = await response.json();
   

    if (data.error) {
      return data.error.message;
    }

    return data.choices?.[0]?.message?.content || "No story generated";
  } catch (error) {
    console.error("AI Error:", error);
    return "Something went wrong";
  }
}
