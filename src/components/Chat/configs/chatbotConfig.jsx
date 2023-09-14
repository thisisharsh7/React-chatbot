import { createChatBotMessage } from "react-chatbot-kit";
import MyCustomMsg from '../chatbot/MyCustomMsg';
import Slot from "../widgets/Slot";
import CountDown from "../widgets/CountDown";

const config = {
  initialMessages: [createChatBotMessage('Hello welcome to student info system', {
    widget: 'gotIt',
  }),
  ],
  widgets: [
    {
      widgetName: 'gotIt',
      widgetFunc: (props) => <MyCustomMsg {...props} />,
    },
    {
      widgetName: 'slot',
      widgetFunc: (props) => <Slot {...props} />,
    },
    {
      widgetName: 'countDown',
      widgetFunc: (props) => <CountDown {...props} />
    }
  ],
  customComponents: {

  },
  customStyles: {
    botMessageBox: {
      backgroundColor: 'blue',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },

  }
};


export default config;






// customStyles: {
//   botMessageBox: {
//     backgroundColor: '#376B7E',
//   },
//   chatButton: {
//     backgroundColor: '#5ccc9d',
//   },
// },