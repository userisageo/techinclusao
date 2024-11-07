"use client";

import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

export default function Home() {
  return (
    <div>
  <Chatbot
    config={config}
    messageParser={MessageParser}
    actionProvider={ActionProvider}
  />
</div>
  );
}
