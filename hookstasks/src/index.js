import React, { useState, useEffect, useCallback, useMemo } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const App = () => {
  const [ id, setId ] = useState(1);
  const [ visible, setVisible ] = useState(true);

  if (visible) {
    return (
      <div>
        <button onClick={() => {setId((prev) => prev + 1)}}>
          +
        </button>
        <button onClick={() => {setVisible(false)}}>
          hide
        </button>
        <PlanetInfo id={id}/>
      </div>
    )
  } else {
    return (
      <button onClick={() => {setVisible(true)}}>
      show
    </button>
    )
  }
}

const getPlanet = (id) => {
  return fetch(`https://swapi.dev/api/planets/${id}`)
  .then(res => res.json())
  .then(data => data);
}

//кастомный хук
const useRequest = (request) => {
  const initialState = useMemo(() =>({
    data: null,
    loading: true,
    error: null,
  }), []);
  const [dataState, setDataState] = useState(initialState);

  useEffect(() => {
    setDataState(initialState)
    let canselled = false;
    request()
      .then(data => !canselled && setDataState({
        data,
        loading: false,
        error: null,
      }))
      .catch(error => !canselled && setDataState({
        data: null,
        loading: false,
        error,
      }))
    return () => canselled = true;
  }, [ request, initialState ]);

  return dataState; 
};

const usePlanetInfo = (id) => {
  const request = useCallback(() => getPlanet(id), [id]);
  return useRequest(request);
};

const PlanetInfo = ({id}) => {
  const { data, loading, error } = usePlanetInfo(id);

  if (error) {
    return <div>{id} - Something is wrong, it's unknown planet</div>
  }
  if (loading) {
    return <div>{id} - ...still loading</div>
  }
  return <div>{id} - {data && data.name}</div>
};
// const Notification = () => {
//   const [ visible, setVisible] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => setVisible(false), 2500);
//     return () => clearTimeout(timeout);
//   }, [])

//   if (visible) {
//     return <div><p>Hello</p></div>
//   } else {
//     return null;
//   }
  
// }
// const HookCounter = ({value}) => {
//   useEffect(() => {
//     console.log('ComponentDidMount');
//     return () => console.log('ComponentWillUnmount')
//   }, [])

//   useEffect(() => {
//     console.log('ComponentDidUpdate');
//   }, [ value ])

//   return (
//     <div>
//       {value}
//     </div>
//   )
// }
// const HookSwitcher = () => {
//   const [ color, setColor ] = useState('gray');
//   const [ fontSize, setFontSize ] = useState(14);

//   return (
//     <div style={{ padding: '10px',
//       backgroundColor: color,
//       fontSize: `${fontSize}px` }}>
//         Hello World
//       <button onClick={() => setColor('gray')}>
//         Dark
//       </button>
//       <button onClick={() => setColor('white')}>
//         Light
//       </button>
//       <button onClick={() => setFontSize((prevState) => prevState + 3)}>
//         +
//       </button>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);