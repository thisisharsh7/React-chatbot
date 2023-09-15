import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const upadateState = (botMessage) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage]
    }));
  }

  const afterSlotMsg = (date, day, time) => {
    const botMessage = createClientMessage(`${date} ${day} ${time}`, {
      withAvatar: false,
      delay: 300,
    });
    upadateState(botMessage);
    setTimeout(afterSlotPrint, 1000);

  }
  const afterSlotPrint = () => {
    const botMessage = createChatBotMessage('Enter your Name', {

      withAvatar: false,
      delay: 300,
    });
    upadateState(botMessage);
  }
  const enterAge = () => {
    const botMessage = createChatBotMessage('Enter your Age', {

      withAvatar: false,
      delay: 300,
    });

    upadateState(botMessage);
  }
  const thankMsg = () => {
    const botMessage = createChatBotMessage('Thank you. In 5 seconds, bot will exit.', {
      widget: "countDown",
      withAvatar: false,
      delay: 300,
    });
    upadateState(botMessage);
  }



  const gotItMsg = () => {
    const clientMessage = createClientMessage('Got it!', {
      withAvatar: false,
      delay: 300
    });
    upadateState(clientMessage);
    setTimeout(afterGotIt, 1000);
  }
  const afterGotIt = () => {
    const botMessage = createChatBotMessage('Pick a slot', {
      widget: 'slot',
      withAvatar: false,
      delay: 300,
    });
    upadateState(botMessage);
  }
  const customResponse = (a) => {
    const botMessage = createChatBotMessage(a, {
      withAvatar: false,
      delay: 300,
    });
    upadateState(botMessage);
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            gotItMsg,
            afterSlotMsg,
            enterAge,
            thankMsg,
            customResponse
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;