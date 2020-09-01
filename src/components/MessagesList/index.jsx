import React from 'react';
import { withUser, withMouse } from '../HOCs';

function MessagesList(props) {
  const { user, messages } = props;
  const currentUserId = user.id;
  return (
    <ol>
      {messages.map(m => (
        <li
          key={m.id}
          style={{
            backgroundColor: currentUserId === m.authorId ? 'gray' : 'initial',
          }}
        >
          {m.body}
        </li>
      ))}
    </ol>
  );
}

export default withMouse(withUser(MessagesList));
//export default withUser(withMouse(MessagesList));
