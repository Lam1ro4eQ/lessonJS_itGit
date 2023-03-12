import React from 'react';
import './App.css';
import {ChildComp} from "./childComp";

function App() {
  return (
    <div className="App">
        <ChildComp title={'Are you sure?'}>
            <div>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
            </div>
        </ChildComp>


        <ChildComp title={'Are you sure???'}>
            <div>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="text"/>
                <button>x</button>
            </div>
        </ChildComp>

    </div>
  );
}

export default App;
