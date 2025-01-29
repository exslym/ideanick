import { useState } from 'react';
import { Segment } from '../../../components/Segment';

export const NewIdeaPage = () => {
  const [state, setState] = useState({
    name: '',
    nick: '',
    description: '',
    text: '',
  });

  return (
    <Segment title='New Idea'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.info('Submitted', state);
        }}
      >
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor='name'>Name</label>
          <br />
          <input
            id='name'
            name='name'
            type='text'
            value={state.name}
            onChange={(e) => {
              setState({ ...state, name: e.target.value });
            }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor='nick'>Nick</label>
          <br />
          <input
            id='nick'
            name='nick'
            type='text'
            value={state.nick}
            onChange={(e) => {
              setState({ ...state, nick: e.target.value });
            }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor='description'>Description</label>
          <br />
          <input
            id='description'
            name='description'
            type='text'
            value={state.description}
            onChange={(e) => {
              setState({ ...state, description: e.target.value });
            }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor='text'>Text</label>
          <br />
          <textarea
            id='text'
            name='text'
            value={state.text}
            onChange={(e) => {
              setState({ ...state, text: e.target.value });
            }}
          />
        </div>

        <button type='submit'>Create Idea</button>
      </form>
    </Segment>
  );
};
