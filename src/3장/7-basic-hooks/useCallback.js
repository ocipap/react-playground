import React, { useCallback, useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [v1, setV1] = useState(0);

  const onSave = useCallback(() => seveToServer(name, age), [name, age]);
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <UserEdit onSave={onSave} setName={setName} setAge={setAge}></UserEdit>
      <p>{v1}</p>
      <button onClick={() => setV1(Math.random())}>v1 수정</button>
    </div>
  );
}

const UserEdit = React.memo(function () {
  console.log('render');
  return null;
});

const seveToServer = () => {
};
