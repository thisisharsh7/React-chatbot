import React from 'react';
import { useDispatch } from 'react-redux';
import { AGE, NAME } from '../../../states/reducers';

const MessageParser = ({ children, actions }) => {
  const dispatch = useDispatch();
  const parse = (message) => {
    if (message.length > 3 && typeof (message) === "string") {
      dispatch(NAME(message));
      actions.enterAge();

    }
    if (message.includes("18")) {
      dispatch(AGE(message));
      actions.thankMsg();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;