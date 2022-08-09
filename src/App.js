import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    fetchPeople(5);
  }, []);

  const fetchPeople = async (num) => {
    const url = `https://randomuser.me/api/?results=${num}`;
    // try {
    //   const res = await fetch(url);
    //   const json = await res.json();
    //   setPersons(json.results);
    // } catch(err) {
    //   console.log('err', err);
    // }
    fetch(url)
      .then(res => res.json())
      .then(json => setPersons(json.results))
      .catch(err => console.log('err', err));
  }

  return (
    <div className="App">
      {persons ? 
        persons.map(person => {
          return <div key={person.id.value}>{person.name.title} {person.name.first} {person.name.last}</div>
        })
        : 'loading'
      }
    </div>
  );
}

export default App;
