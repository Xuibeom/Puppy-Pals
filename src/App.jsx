import { useState } from "react";
import "./App.css";
import { puppyList } from "./data.js";

function App() {
  console.log("This is puppyList", puppyList);
  const [puppies, setPuppies] = useState(puppyList);
  console.log("This is the puppies", puppies);
  const [featPuppyID, setFeatPuppyID] = useState(null);

  const featuredPuppy = puppies.find((puppy) => puppy.id === featPuppyID);
  console.log(featuredPuppy);
  return (
    <>
      <div className="App">
        {puppies.map((puppy) => {
          // When working with lists of data in React, it needs a key to maintain the order of the elements.
          // The unique identifier puppy.id will work in this case since it is unique for each puppy.
          return (
            <p onClick={() => setFeatPuppyID(puppy.id)} key={puppy.id}>
              {puppy.name}
            </p>
          );
        })}

        {featPuppyID && (
          // This is essentially the render function
          <div>
            <h2>{featuredPuppy.name}</h2>
            <ul>
              <li>Age: {featuredPuppy.age}</li>
              <li>Email: {featuredPuppy.email}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
