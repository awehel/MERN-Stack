import './App.css';
import Person from './components/Person';

const people = [
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 45,
    hairColor: "Black"

  }, 
  {
    firstName: "John",
    lastName: "Smith",
    age: 88,
    hairColor: "Brown"

  }
]

function App() {
  return (
    <div className="App">
      {
        people.map((member, index)=>{
          return(
            <Person
            key={index}
            firstName={member.firstName}
            lastName={member.lastName}
            age={member.age}
            hairColor={member.hairColor}
            />
          )
        })
        }
      
    </div>
  );
}

export default App;
