import React, { useState, useEffect } from "react";

const Example = () => {
  //   componentDidMount() {
  //     document.title = `You clicked ${this.state.count} times`;
  //   }

  //   componentDidUpdate() {
  //     document.title = `You clicked ${this.state.count} times`;
  //   }
  const [count, setCount] = useState(0);
  useEffect(()=>{
    document.title = `You clicked ${count} times`;
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count +1)}>
        Click me
      </button>
    </div>
  );
};
export default Example;
