import { useEffect, useState } from 'react';
import './App.css';
import Filter from './Filter';
import Header from './Header';
import List from './List';
import { films } from './../films';
import Context from './../assets/js/Context';
import Pagination from './Pagination';
function App() {
    const [setList, useSetList] = useState(films);
    const value = {
        films: films,
        useSetList,
        setList,
    };
    const [currentPage, setCurrentPage]=useState(1);
    const [PerPage]=useState(10);

    const lastIndex=currentPage * PerPage;
    const firstIndex= lastIndex -PerPage;
    const current=value.setList.slice(firstIndex,lastIndex)
    value.current=current;
    const paginate=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }
    return (
        <Context.Provider value={value}>
            <div className="App">
                <Header />
                <div className="content">
                    <Filter />
                    <List />
                    <Pagination PerPage={PerPage} paginate={paginate}/>
                   
                </div>
            </div>
        </Context.Provider>
    );
}

export default App;
