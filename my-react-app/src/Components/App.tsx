import { useEffect, useState } from 'react';
import './App.css';
import Filter from './Filter';
import Header from './Header';
import List from './List';
import { films } from './../films';
import Context from './../assets/js/Context';
function App() {
    let newList = [...films].slice(0, 10);
    const [setList, useSetList] = useState(newList);
    const value = {
        films: films,
        useSetList,
        setList,
    };

    return (
        <Context.Provider value={value}>
            <div className="App">
                <Header />
                <div className="content">
                    <Filter />
                    <List />
                </div>
            </div>
        </Context.Provider>
    );
}

export default App;
