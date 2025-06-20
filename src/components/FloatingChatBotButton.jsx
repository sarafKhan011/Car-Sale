import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Send } from "lucide-react"; // Import Lucide send icon

const FloatingChatBotButton = () => {
  const navigate = useNavigate();
  const [showBubble, setShowBubble] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false); // State to manage chat window visibility
  const [message, setMessage] = useState(""); // State to manage the input message
  const [chatMessages, setChatMessages] = useState([]); // State to manage chat messages

  // Predefined common questions for a clothing store
  const commonQuestions = [
            "What types of cars do you sell?",
        "Can I schedule a test drive?",
        "Do you offer financing options?",
        "How can I list my car for sale?",
        "What documents are required to buy a car?",
        "Do you offer any warranty with the cars?",
        "Can I trade in my old car?"
  ];

  // Predefined answers for common questions
  const commonAnswers = [
   "We sell both new and used cars including sedans, SUVs, trucks, and more.",
  "Yes, you can schedule a test drive by contacting us or using the 'Book a Test Drive' form.",
  "We offer flexible financing options through several banking partners.",
  "To list your car, click on 'Submit Listing' and fill out the required details.",
  "You need a valid ID, proof of address, and proof of insurance to purchase a car.",
  "Yes, most cars come with a limited warranty. Details are provided in the listing.",
  "Yes, you can trade in your old car. We'll evaluate it and offer you a fair price."
  ];

  useEffect(() => {
    // Show the bubble message after 2 seconds
    const showTimer = setTimeout(() => {
      setShowBubble(true);
    }, 2000);

    // Hide the bubble message after 5 seconds of showing
    const hideTimer = setTimeout(() => {
      setShowBubble(false);
    }, 7000); // 2000ms (show delay) + 5000ms (display duration)

    // Cleanup the timers
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    // Auto-welcome the user when the chat opens
    if (isChatOpen && chatMessages.length === 0) {
      const welcomeMessage = {
        text: "Hello! Welcome to ALM-Cars. How can I assist you today? Here are some common questions:",
        isBot: true,
      };
      const questionMessages = commonQuestions.map((question, index) => ({
        text: `${index + 1}. ${question}`,
        isBot: true,
      }));
      setChatMessages([welcomeMessage, ...questionMessages]);
    }
  }, [isChatOpen]);

  const handleClick = () => {
    setIsChatOpen(!isChatOpen); // Toggle chat window visibility
  };

  const handleSendMessage = () => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage) return; // Ignore empty messages

    // Add user's message to chat
    const userMessage = { text: trimmedMessage, isBot: false };
    setChatMessages((prev) => [...prev, userMessage]);

    // Check if the message is a number corresponding to a common question
    const questionNumber = parseInt(trimmedMessage, 10);
    if (questionNumber >= 1 && questionNumber <= commonQuestions.length) {
      const selectedQuestion = commonQuestions[questionNumber - 1];
      const botResponse = {
        text: `${commonAnswers[questionNumber - 1]}`,
        isBot: true,
      };
      setChatMessages((prev) => [...prev, botResponse]);
    } else if (questionNumber) {
      // Handle invalid number input
      const botResponse = {
        text: "Please select a valid number from the list.",
        isBot: true,
      };
      setChatMessages((prev) => [...prev, botResponse]);
    } else {
      // Check if the message matches any common question
      const matchedQuestion = commonQuestions.find((q) =>
        trimmedMessage.toLowerCase().includes(q.toLowerCase())
      );

      if (matchedQuestion) {
        // Add bot's response to chat
        const botResponse = {
          text: `For "${matchedQuestion}", ${
            commonAnswers[commonQuestions.indexOf(matchedQuestion)]
          }`,
          isBot: true,
        };
        setChatMessages((prev) => [...prev, botResponse]);
      } else {
        // Handle unrelated questions
        const botResponse = {
          text: "For further assistance, please contact us at +94764854578.",
          isBot: true,
        };
        setChatMessages((prev) => [...prev, botResponse]);
      }
    }

    setMessage(""); // Clear the input after sending
  };

  return (
    <div className="fixed bottom-8 right-8 flex items-end flex-col">
      {/* Chat Window */}
      {isChatOpen && (
        <div className="bg-white rounded-lg shadow-lg w-80 h-96 mb-4 flex flex-col">
          {/* Chat Header */}
          <div className="bg-green-700 text-white p-4 rounded-t-lg flex items-center justify-between">
            <p className="font-semibold">ALM-Cars ChatBot</p>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.isBot ? "justify-start" : "justify-end"
                } mb-4`}
              >
                <div
                  className={`${
                    msg.isBot ? "bg-gray-100" : "bg-green-700 text-white"
                  } p-3 rounded-lg max-w-[70%]`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input Area */}
          <div className="p-4 border-t border-gray-200 flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-700"
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 p-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors"
            >
              <Send size={20} /> {/* Lucide send icon */}
            </button>
          </div>
        </div>
      )}

      {/* Floating chatbot button and left-side bubble message */}
      <div className="flex items-center">
        {/* Left-side bubble message with slide-in animation */}
        <div
          className={`bg-white p-4 rounded-lg shadow-lg mr-4 transition-all duration-500 ease-in-out transform ${
            showBubble
              ? "translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
          }`}
        >
          <p className="text-sm text-gray-700">Ask me anything!</p>
        </div>

        {/* Floating chatbot button */}
        <div
          className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center shadow-lg hover:bg-green-800 transition-colors cursor-pointer"
          onClick={handleClick}
        >
          <img
            src={assets.bot} // Replace with your chatbot icon path
            alt="ChatBot"
            className="w-16 h-16"
          />
        </div>
      </div>
    </div>
  );
};

export default FloatingChatBotButton;