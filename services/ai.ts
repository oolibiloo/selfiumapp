
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types.ts";

const SYSTEM_INSTRUCTION = `
أنت المساعد الذكي لشركة Selfium Tech في ليبيا. مهمتك مساعدة المستخدمين في:
1. شرح باقات الإنترنت (مثل Elite 21M و Speed 7M).
2. المساعدة في حل مشاكل الـ WiFi (مثل ضعف الإشارة أو انقطاع الخدمة).
3. شرح طرق شحن الرصيد عبر تطبيق "سداد" أو "تداول" أو كروت الشحن.
4. تقديم معلومات عن الوكلاء في بنغازي والمناطق المحيطة.
اجعل ردودك قصيرة، ودودة، وباللهجة الليبية أو العربية الفصحى البسيطة.
`;

export const sendMessageToGemini = async (userMessage: string, history: ChatMessage[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(m => ({ role: m.role === 'user' ? 'user' : 'model', parts: [{ text: m.text }] })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "عذراً، حدث خطأ في الاتصال بالمساعد الذكي. حاول مرة أخرى لاحقاً.";
  }
};
