import React, { useState } from 'react';

function Test(prop) {

  const [count, setCount] = useState(0); // 初期値は0 , setCountはcountを変更するための関数名

  return (
    <div className="test">
      {prop.obj.map((item, i) => {
        return <li key={i}>{item.a}{item.status}</li> //keyを指定
      })}
      {prop.hoge}

      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>
          Click me
      </button>
      </div>
    </div>
  );
}

export default Test;
