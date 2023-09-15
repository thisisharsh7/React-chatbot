import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AGE, NAME } from '../../../states/reducers';

const MessageParser = ({ children, actions }) => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.checker);
  const parse = (message) => {
    if (name.length == 0) {
      if (!message.match(/\d/)) {
        if (message.length > 2) {
          dispatch(NAME(message));
          actions.enterAge();
        } else {
          actions.customResponse('Name is too short.');
        }
      } else {

        actions.customResponse('Name must include letters.');
      }

    } else {
      if (Number(message)) {
        dispatch(AGE(message));
        actions.thankMsg();
      } else {
        actions.customResponse('Age must include digits.');
      }

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