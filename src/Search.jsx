import { useState } from "react";

//  export default function SearchBar() {
//   const [query, setQuery] = useState('');

//   return (
//     <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search..."
//     />
//   );
//  }

 // Source - https://stackoverflow.com/q/71039088
// Posted by Active Coder
// Retrieved 2026-04-29, License - CC BY-SA 4.0

import ReactDOM from 'react-dom';

 export default function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => console.log(e.target.value)}
          // onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}


