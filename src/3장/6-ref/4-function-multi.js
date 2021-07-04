import { useRef } from 'react';

export default function App() {
  const boxListRef = useRef({ });

  const onClick = () => {
    let maxRight = 0;
    let maxId = '';

    for(const box of BOX_LIST) {
      const ref = boxListRef.current[box.id];
      if(ref) {
        const rect = ref.getBoundingClientRect();
        if(maxRight < rect.right) {
          maxId = box.id;
          maxRight = rect.right;
        }
      }
    }

    alert(`가장 오른쪽 박스는 ${maxId}`)
  }
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100vw',
          height: '100%',
        }
        }>
        {BOX_LIST.map(item => {
          return (
            <div
              key={item.id}
              ref={ref => (boxListRef.current[item.id] = ref)}
              style={{
                flex: '0 0 auto',
                width: item.width,
                height: 100,
                background: 'yellow',
                border: 'solid 1px red'
              }}
            >{`box_${item.id}`}</div>
          );
        })}
      </div>
      <button onClick={onClick}>오른쪽 끝요소는?</button>
    </div>
  );
}

const BOX_LIST = [
  { id: 1, width: 60 },
  { id: 2, width: 30 },
  { id: 3, width: 10 },
  { id: 4, width: 90 },
  { id: 5, width: 50 },
  { id: 6, width: 30 },
  { id: 7, width: 160 },
];
