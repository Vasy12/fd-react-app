import React, { useReducer } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { date } from 'yup';
import { ca } from 'date-fns/esm/locale';

const data = {
  members: [
    {
      id: 1,
      name: 'Sasha',
    },
    {
      id: 2,
      name: 'Tanya',
    },
  ],
  messages: [
    {
      authorId: 1,
      body: 'Message text',
    },
    {
      authorId: 1,
      body: 'Message text',
    },
    {
      authorId: 1,
      body: 'Message text',
    },
    {
      authorId: 1,
      body: 'Message text',
    },
    {
      authorId: 1,
      body: 'Message text',
    },
    {
      authorId: 1,
      body: 'Message text',
    },
    {
      authorId: 1,
      body: 'Message text',
    },
    {
      authorId: 2,
      body: 'Message text',
    },
    {
      authorId: 1,
      body: 'Message text',
    },
    {
      authorId: 2,
      body: 'Message text',
    },
    {
      authorId: 1,
      body: 'Message text',
    },
    {
      authorId: 2,
      body: 'Message text',
    },
    {
      authorId: 1,
      body: 'Message text',
    },
    {
      authorId: 2,
      body: 'Message text',
    },

    {
      authorId: 2,
      body: 'Message text',
    },
    {
      authorId: 2,
      body: 'Message text',
    },
  ],
};

function Chat() {
  const [{ messages }, dispatch] = useReducer(chatReducer, {
    members: [],
    messages: [],
  });

  const getData = useCallback(() => data, []);

  useEffect(() => {
    const data = getData();
    dispatch({
      type: 'DATA_RESPONSE_SUCCESS',
      data,
    });
  }, []);

  return (
    <ol>
      {messages.map((m, index) => (
        <li key={index}>{JSON.stringify(m)}</li>
      ))}
    </ol>
  );
}

function chatReducer(state, action) {
  switch (action.type) {
    case 'DATA_RESPONSE_SUCCESS': {
      const {
        data: { messages, members },
      } = action;

      const messagesWithAuthors = messages.map(m => ({
        ...m,
        author: members.find(a => a.id === m.authorId) ?? null,
      }));

      return {
        members,
        messages: messagesWithAuthors,
      };
    }
    default:
      return date;
  }
}

export default Chat;
