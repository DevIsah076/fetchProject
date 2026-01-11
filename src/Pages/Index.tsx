import { useEffect, useState } from "react";
import tailwindcss from '@tailwindcss/vite'

// export default function Index() {
//   const [todos, setTodos] = useState([]);
  

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await fetch("https://jsonplaceholder.typicode.com/todos", {
//         // method: "DELETE",
//         // body: JSON.stringify({title: "king", id: "3"})
        
//       });
//       console.log(result);

//       const data = await result.json();
//       console.log(data);
    
//       setTodos(data);
//     };

//     fetchData();
//     // console.log(todos);
//   }, []);

  return (
    <>
      <div style={{ fontWeight: "bold", fontSize: "90" }}>index page</div>

      {/* {
        todos.map((todo)=>{
          <p key={todo.id} >{todo.title}</p>
        })
      } */}
    </>
  );
}

let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("success");
  } else {
    reject("you are not allow");
  }
});
p.then((message) => {
  console.log("this message is " + message);
}).catch((message) => {
  console.log("this message is " + message);
});

const [todos setTodos] = useState([])
useEffect
const fetchData = async () =>{
   const result = await fetch("https://jsonplaceholder.typicode.com/todos")
}
const data = await result.json()



