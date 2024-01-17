import { Link } from "react-router-dom";
import { useState } from 'react'
import React, { useEffect } from 'react';

const YourComponent = () => {
const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
      try {
        const response = await fetch(apiUrl, {
          method: "GET",
        //   headers: {
        //     "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
        //     "X-RapidAPI-Host": "www.themealdb.com/api/",
        //   },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
      <div>
      <h1>YOUR RECIPES</h1>
      {apiData ? (
        <ul>
          <li>Answer: {apiData.title}</li>
          <li>Some other data: {apiData.someOtherData}</li> 
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
//   );
// };

export default YourComponent;


// const Recipe = () => {
    // return ( 
        // <div><h1>hello</h1></div>
// );
// }



// import { useEffect,useState } from "react";

// function App () {
//   const [posts, setposts] = useState(null);
//   useEffect(() => {
//     fetch("https: //www.themealdb.com/api/json/v1/1/random.php")
//       .then((data) => data.json())
//       .then((data) => {
//         setposts(data);
//       });
//   }, []);


//     return (
//       <div className="app">
//         {posts ? (
//           posts.map((post) => {
//             return (
//               <div className="card-body">
//                 <h5>{post.title}</h5>
//                 <p>{post.body}</p>
//               </div>
//             );
//           })
//         ) : (
//           <h3>Loading...</h3>
//         )}
//       </div>
//     );
//   };


// export default Recipe;