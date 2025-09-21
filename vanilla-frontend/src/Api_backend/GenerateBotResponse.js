// export const Gemini = async (text) => {
//   const apiKey = import.meta.env.VITE_GEMINI_API;

//   try {
//     const res = await fetch(
//       `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
//       {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           contents: [
//             {
//               parts: [{ text: `Summarize the following in 3 bullet points:\n\n${text}` }],
//             },
//           ],
//         }),
//       }
//     );

//     const data = await res.json();
//     const response = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
//     return response;
//   } catch (err) {
//     console.error('Gemini summarization failed:', err);
//     return 'Failed to summarize.';
//   }
// };
const generateBotResponse = async (history, setChatHistory) => {
  const updateHistory = (text) => {
    setChatHistory(prev => [
      ...prev.filter(msg => msg.text !== "Thinking..."),
      { role: "model", text }
    ]);
  };

  // Format ChatHistory for API request
  const formattedHistory = history.map(({ role, text }) => ({
    role,
    parts: [{ text }]
  }));

  const apiKey = import.meta.env.VITE_GEMINI_API;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contents: formattedHistory })
  };

  try {
    const response = await fetch(apiKey, requestOptions);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || "Something went wrong!");

    const apiResponseText = data.candidates[0].content.parts[0].text
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .trim();

    updateHistory(apiResponseText);
  } catch (error) {
    console.error(error);
  }
};

export default generateBotResponse;
