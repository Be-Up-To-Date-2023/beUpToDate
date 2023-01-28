import React, { useCallback, useMemo, memo, useState } from "react";

//--------------**useMemo VS useCallback**----------------------
const App = () => {
  const HelloFunction = () => {
    return "hi im useMemo😊";
  };

  const useMemoResult = useMemo(HelloFunction, []);
  const useCallbackResult = useCallback(HelloFunction, []);

  console.log("useMemoResult: ", useMemoResult);
  console.log("useCallbackResult: ", useCallbackResult);

  return <p className="text-center mt-5">hello useCallback and useMemo😊</p>;
};

export default App;

//--------------** need useCallback**----------------------

// const Counter = ({ value, children }) => {
//   console.log("Render: ", children);

//   return (
//     <div>
//       {children}: {value}
//     </div>
//   );
// };

// const App = () => {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   const increaseCounter1 = () => {
//     setCount1((count1) => count1 + 1);
//   };

//   return (
//     <>
//       <button onClick={increaseCounter1}>Increase counter 1</button>
//       <Counter value={count1}>Counter 1</Counter>
//       <Counter value={count2}>Coutner 2</Counter>
//     </>
//   );
// };

// export default App;

//--------------** use useCallback**----------------------

// const App = () => {
//   const [count1, setCount1] = React.useState(0);
//   const [count2, setCount2] = React.useState(0);

//   const increaseCounter1 = () => {
//     setCount1((count1) => count1 + 1);
//   };

//   return (
//     <>
//       <button onClick={increaseCounter1}>Increase counter 1</button>
//       <Counter value={count1}>Counter 1</Counter>
//       <Counter value={count2}>Coutner 2</Counter>
//     </>
//   );
// };

// const Counter = memo(({ value, children }) => {
//   console.log("Render: ", children);

//   return (
//     <div>
//       {children}: {value}
//     </div>
//   );
// });

// export default App;

//--------------** need useCallback**----------------------

// function factorialOf(n) {
//   console.log("factorialOf(n) called!");
//   return n <= 0 ? 1 : n * factorialOf(n - 1);
// }

// export default function CalculateFactorial() {
//   const [number, setNumber] = useState(1);
//   const [otherData, setOtherData] = useState(true);

//   const factorial = factorialOf(number);

//   const onChange = (event) => {
//     setNumber(Number(event.target.value));
//   };

//   const onClick = () => {
//     setOtherData((index) => !index);
//     console.log(`update otherData:${otherData}`);
//   };

//   return (
//     <div className="mt-5 d-flex flex-column align-items-center">
//       Factorial of &nbsp;
//       <input type="number" value={number} onChange={onChange} />
//       &nbsp; is {factorial}
//       <button onClick={onClick} className="btn btn-primary d-block mt-5">
//         update otherData
//       </button>
//     </div>
//   );
// }

//------------** use useMemo**---------------

// function factorialOf(n) {
//   console.log("factorialOf(n) called!");
//   return n <= 0 ? 1 : n * factorialOf(n - 1);
// }

// export default function CalculateFactorial() {
//   const [number, setNumber] = useState(1);
//   const [otherData, setOtherData] = useState(true);

//   const factorial = useMemo(() => factorialOf(number), [number]);

//   const onChange = (event) => {
//     setNumber(Number(event.target.value));
//   };

//   const onClick = () => {
//     setOtherData((index) => !index);
//     console.log(`update otherData:${otherData}`);
//   };

//   return (
//     <div className="mt-5 d-flex flex-column align-items-center">
//       Factorial of &nbsp;
//       <input type="number" value={number} onChange={onChange} />
//       &nbsp; is {factorial}
//       <button onClick={onClick} className="btn btn-primary d-block mt-5">
//         update otherData
//       </button>
//     </div>
//   );
// }
