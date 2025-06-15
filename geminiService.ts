
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// IMPORTANT: The API key MUST be set as an environment variable `process.env.API_KEY`.
// This code assumes `process.env.API_KEY` is available in the execution environment.
const API_KEY = process.env.API_KEY;

let ai: GoogleGenAI | null = null;
if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
} else {
  console.warn("API_KEY environment variable not found. Gemini API calls will fail if attempted.");
}

const MODEL_NAME = "gemini-1.5-flash-preview-04-17";

// Generalized system instruction for video prompts
const SYSTEM_INSTRUCTION_VIDEO = `You are an expert content creator and viral video strategist. Your goal is to help users generate highly engaging and creative video prompts for online video platforms. Your suggestions should be fun, engaging, suitable for a general audience or a specified target audience, and formatted clearly with markdown-style headings (e.g., '**Video Title:**', '**Video Concept:**'). Ensure each section is distinct and easy to read.`;

const SYSTEM_INSTRUCTION_IMAGE = `You are an expert prompt engineer for AI image generation models. Your goal is to take a user's simple idea for an image and expand it into a detailed, vivid, and highly descriptive text prompt. This prompt should be suitable for generating high-quality images using AI. Focus on visual details, art style, composition, lighting, and mood. The output should be a single, coherent paragraph of descriptive text. Do not include any other text, headings, or explanations, just the prompt itself. Make it sound epic and inspiring.`;

export const generateVideoScriptPrompt = async (userInput: string): Promise<string> => { // Renamed function
  if (!ai) {
    throw new Error("Gemini AI client is not initialized. Is the API_KEY configured?");
  }

  try {
    // Generalized prompt content for video scripts
    const promptContent = `Generate a detailed video prompt based on this core idea: "${userInput}".

The prompt MUST include the following sections, each clearly marked with a markdown bold heading:
1.  **Video Title:** (Catchy and relevant to the content)
2.  **Video Concept:** (1-2 engaging sentences describing the core idea and appeal)
3.  **Target Platform/Audience:** (Suggest relevant platforms like YouTube, TikTok, Instagram Reels, or describe the intended audience demographics/interests)
4.  **Script Outline/Key Scenes:** (3-5 bullet points detailing key moments, narrative flow, or important segments, e.g., using '-' or '*')
5.  **Engagement Hooks:** (e.g., a compelling question for viewers, a surprising element, a unique challenge, a call to action)
6.  **Thumbnail Idea:** (A brief description of a visually compelling thumbnail that captures attention)

Make the tone engaging, creative, and appropriate for the video's concept and intended audience. Provide actionable and inspiring ideas!`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: promptContent,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION_VIDEO,
      }
    });
    
    const textOutput = response.text;

    if (typeof textOutput === 'string' && textOutput.trim() !== '') {
      return textOutput;
    } else {
      console.error("Gemini API returned empty or non-string response for video prompt:", response);
      throw new Error("Received an unexpected or empty response format from the AI for video prompt.");
    }

  } catch (error) {
    console.error("Error generating video script prompt with Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to generate video script via AI: ${error.message}`);
    }
    throw new Error("An unknown error occurred while generating the video script with the AI.");
  }
};

export const generateImageCreationPrompt = async (userInput: string): Promise<string> => {
  if (!ai) {
    throw new Error("Gemini AI client is not initialized. Is the API_KEY configured?");
  }

  try {
    const promptContent = `User's image concept: "${userInput}". Expand this into a detailed and vivid textual prompt for an AI image generator.`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: promptContent,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION_IMAGE,
        // temperature: 0.8, // Example: Adjust temperature for creativity if needed
      }
    });

    const textOutput = response.text;

    if (typeof textOutput === 'string' && textOutput.trim() !== '') {
      // Clean up potential markdown code fences
      let cleanedText = textOutput.trim();
      const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
      const match = cleanedText.match(fenceRegex);
      if (match && match[2]) {
        cleanedText = match[2].trim();
      }
      return cleanedText;
    } else {
      console.error("Gemini API returned empty or non-string response for image prompt:", response);
      throw new Error("Received an unexpected or empty response format from the AI for image prompt.");
    }

  } catch (error) {
    console.error("Error generating image creation prompt with Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to generate image prompt via AI: ${error.message}`);
    }
    throw new Error("An unknown error occurred while generating the image prompt with the AI.");
  }
};
