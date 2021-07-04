import { useCallback, useState } from 'react';

export default function App() {
  const [text, setText] = useState(TEXTTEXT);
  const [showText, setShowText] = useState(true);

  const setInitialText = useCallback((ref) => {ref && setText(TEXTTEXT);}, []);


  return (
    <div>
      {showText && (
        <input type="text" ref={setInitialText} value={text} onChange={e => setText(e.target.value)}/>
      )}
      <button onClick={() => setShowText(!showText)}>보이기/가리기</button>
    </div>
  )
}

const TEXTTEXT = '안녕하세요';
