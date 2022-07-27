import { useState } from 'react';
import { Remarkable } from 'remarkable';
import './App.css';

const md = new Remarkable();

function App() {
  const [ text, setText ] = useState("");
  return (
    <>
      <main>
        <h1>Markdown Editor </h1>
        <article>
          <label htmlFor='markdown'>Type....</label> <br />
          <textarea cols='30' rows='10' id='markdown' name='markdown' placeholder='Type Something' required
          value={text}
          onChange={(e) => setText(e.target.value)}
          >

          </textarea>
          <h3> Preview</h3>

          <div dangerouslySetInnerHTML={{__html: md.render(text)}}></div>
        </article>
      </main>
    </>
  );
}

export default App;
