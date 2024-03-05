// ****************************************ASYNCHRONOUS JAVASCRIPT************************************************
//**************** setInterval()

// The setInterval allows you to execute a chunk of code every time a specified amount of milliseconds passes. For example; this code logs "Hello World" every thousand milliseconds:

// EXAMPLE 1

// setInterval(() => {
// 	console.log('Hello World');
// }, 1000);

// turn to arrow function
// setInterval(() => console.log('Hello World'), 1000);

const myInterval = setInterval(() => console.log("Hello World"), 1000);

// The clear function is especially useful if you only want an interval to execute a certain amount of time, and clear it once a condition (such as a milisecond counter getting to a certain value) is reached.

clearInterval(myInterval);

//**************** setTimeout()

// The setTimeout function allows you to wait a certain amount of time before executing a chunk of code, do note that other code outside of the timeout will continue execution as normal. The way it's used is identical to setInterval.
/*
setTimeout(() => {
   console.log('Welcome to DLT Africa'); 
}, 2000);

 console.log('Here we go');

// EXAMPLE
 setTimeout(() => {
    console.log('at the top'); 
}, 7000);

   console.log('at the bottom');
   
   
// EXAMPLE
 let name$= 'pepper shop'
 let price = 300;

// // **********
 let timer1 = setTimeout(firstMessage, 3000, name$, price)
 function firstMessage(name$, price) {
    alert(`Hi Zainab, my ${name$} has the lowest price of ${price} in the market`)
 }

// // **********
let timer2 = setTimeout(secondMessage, 9000)
function secondMessage() {
   alert(`Hot every day. I need cold tea`)
}

// // ***********
let timer3 = setTimeout(thirdMessage, 6000)
function thirdMessage() {
   alert(`It's stingy moment oh Bode look away`)
}
*/

// SYNCHRONOUS JS

// Synchronous Javascript is one in which the code is executed line by line and their tasks are completed instantly, i.e. there is no time delay in the completion of the tasks for those lines of code.

// Example 1

// const functionOne = () => {
//     console.log('Function One');

//     functionTwo();

//     console.log('Function One, Part 2')
// }

// const functionTwo = () => {
//     console.log('Function Two');
// }

// functionOne();

// EXAMPLE 2
// ASYNCHRONOUS

// Asynchronous Javascript is one in which some lines of code take time to run. These tasks are run in the background while the Javascript engine keeps executing other lines of code. When the result of the asynchronous tasks gets available, it is then used in the program.

// const functionOne = () => {
//     console.log('Function One'); // 1

//     functionTwo();

//     console.log('Function One, Part 2') // 2
// }

// const functionTwo = () => {
//     setTimeout(() => console.log('Function Two'), 2000); // 3 waiting
// }

// functionOne();

// Function One
// Functino One, Part 2
// (after two second delay)

// Function Two

//ASYNC and Await

// Sample 1
// const myUsers = {
//     userList: []
// }

// const myCoolFunc = async() => {
//     const response = await fetch( );

//     const jsonUserData = await response.json();

//     // console.log(jsonUserData)

//     return jsonUserData
// }

// const anotherFunc = async () => {
//     const data = await myCoolFunc();
//     myUsers.userList = data;
//     console.log(myUsers.userList)
// }

// anotherFunc()
// console.log(myUsers.userList)

// sample 2

/*
const getAllUserEmails = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const jsonUserData = await response.json();
    // console.log(jsonUserData)

    const userEmailArr = jsonUserData.map(user => {
        return user.email;
    })

    console.log(userEmailArr)   

//    return userEmailArr   //promise pending (is not awaiting is promise to fullfil)
}
// console.log(getAllUserEmails()) //promise pending

getAllUserEmails()
*/

//  OR
//But this is not Async way

/*
const getAllUserEmails = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const jsonUserData = await response.json();
    // console.log(jsonUserData)

    const userEmailArr = jsonUserData.map(user => {
        return user.email;
    }) 

    postToWebPage(userEmailArr)
}

const postToWebPage =(data) => {
    console.log(data)
}

getAllUserEmails()

*/

// Sample 3
//2nd Parameter of Fetch  is a Object

const getJoke = async () => {
  const res = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const jsonJokeData = await res.json();

  console.log(jsonJokeData.joke);
};

getJoke();

//OR for POST

// const jokeObj = {
//   id: "0oo71234",
//   joke: "Why everything look dark ? Because this code is not coding",
// };

// const postData = async (jokeObj) => {
//   const response = await fetch("https://httpbin.org/post", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(jokeObj),
//   });

//   const jsonRes = await response.json();

//   console.log(jsonRes.headers);
// };

// postData(jokeObj);

// SAMPLE 4
// Function using async/await with arrow function
const getData = async () => {
  try {
    // Simulate fetching data from an API
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

// Calling the async function and using then/catch to handle the result
getData()
  .then((data) => console.log("Data:", data))
  .catch((error) => console.error("Error:", error.message));


//SAMPLE 5

//     ' fake url
// const fetchDataWithError = async () => {
//     try {
//       console.log('Fetching Data...');
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   };
  
//   fetchDataWithError().then(result => {
//     if (result) {
//       console.log('Data:', result);
//     }
//   });

//OR
//Just get only one person details

// const fetchDataWithError = async () => {
//     try {
//       console.log('Fetching Data...');
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const [userData] = await response.json(); // Assuming data is an array of users
//       const { username, email, name } = userData;
//       return { username, email, name };
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   };
  
//   fetchDataWithError().then(({ username, email, name }) => {
//     console.log('Username:', username);
//     console.log('Email:', email);
//     console.log('Name:', name);
//   });
  

// OR
// Using map method to get all the data

// const fetchDataWithError = async () => {
//     try {
//       console.log('Fetching Data...');
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       if (!response.ok) { 
//         throw new Error('Failed to fetch data');
//       }
//       const userData = await response.json(); // Assuming data is an array of users
//       const mappedData = userData.map(({ username, email, name }) => ({ username, email, name }));
//       return mappedData;
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   };
  
//   fetchDataWithError().then((mappedUsers) => {
//     console.log('Mapped Users:', mappedUsers);
//   });
  
// const fetchDataWithError = async () => {
//     try {
//       console.log('Fetching Data...');
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const userData = await response.json(); // Assuming data is an array of users
//       const mappedData = userData.map(({ username, email, name, address }) => ({
//         username,
//         email,
//         name,
//         cities: Array.isArray(address) ? address.map(addr => addr.city) : [] // Extract city names
//       }));
//       return mappedData;
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   };
  
//   fetchDataWithError().then((mappedUsers) => {
//     mappedUsers.forEach(({ username, email, name, cities }) => {
//       console.log('Username:', username);
//       console.log('Email:', email);
//       console.log('Name:', name);
//     //   console.log('Cities:');
//       cities.forEach((cityName) => {
//         console.log('  -', cityName);
//       });
//       console.log('-----------------------');
//     });
//   });
  


// sample all destructure

const fetchDataWithError = async () => {
    try {
      console.log('Fetching Data...');
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
  
      // Destructure the fetched data
      const mappedData = data.map(({ id, name, username, email, address, phone, website, company }) => ({
        id,
        name,
        username,
        email,
        address: {
          zipcode: address.zipcode,
        },
        phone,
        website, 
        company: {
          name: company.name,
        }
      }));
      return mappedData;
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  
  // Call the async function and log the result
  (async () => {
    const result = await fetchDataWithError();
    if (result) {
      console.log('Mapped Data:', result);
    }
  })();
  