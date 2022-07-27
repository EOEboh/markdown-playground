import { useState } from 'react';
import { Remarkable } from 'remarkable';
import './App.css';

const md = new Remarkable();

function App() {
  // state for textarea input value
  const [ text, setText ] = useState("");

  return (
    <div className='body'>
      <main className='main'>
        <h1>Markdown Editor </h1>
        <article>
          <label htmlFor='markdown'><h3>Type Here </h3></label> 
          <textarea cols='30' rows='10' id='markdown' name='markdown' placeholder='Type Something...' required
          value={text}
          onChange={(e) => setText(e.target.value)}
          >
          </textarea>
          
          <h3> Preview</h3>

          <div className='output-div' dangerouslySetInnerHTML={{__html: md.render(text)}} >

          </div>
          
        </article>
      </main>
    </div>
  );
}

export default App;
