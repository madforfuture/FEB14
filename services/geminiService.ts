import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  if (!process.env.API_KEY) {
    throw new Error("API Key not found");
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateTributeMessage = async (mood: 'patriotic' | 'solemn' | 'grateful'): Promise<string> => {
  try {
    const ai = getAiClient();
    const prompt = `Write a short, respectful, and emotional tribute message (max 50 words) for Indian soldiers who sacrificed their lives. The tone should be ${mood}. Do not use hashtags.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text?.trim() || "Saluting the brave souls who gave everything for our tomorrow. Jai Hind.";
  } catch (error) {
    console.error("Error generating tribute:", error);
    return "Your sacrifice will never be forgotten. Jai Hind.";
  }
};