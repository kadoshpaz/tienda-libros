// import React, { createContext, useEffect, useState } from "react";

// export const UserContext = createContext();

// // eslint-disable-next-line react/prop-types
// const UserProvider = ({ children }) => {

//   const [users, setUsers] = useState([]);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     getUsersFromJson();
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const getUsersFromJson = async () => {
//     try {
//       const res = await fetch('users.json');
//       const data = await res.json();
//       console.log(data);

//       setUsers(data);
//     } catch (error) {
//       console.error(error);
//       setUsers([]);
//     }
//   };

//   const login = async (email, password) => {
//     const userDB = users.find((item) => item.email === email && item.password === password);

//     if (userDB) {
//       setUser(userDB);
//     } else {
//       setUser(null);
//     }

//     return userDB;
//   };

//   const register = (newUser) => {
//     console.log(newUser);
//     const randomId = generateRandomId();
//     const newUserWithId = { id: randomId, ...newUser };
//     setUsers([...users, newUserWithId]);

//     localStorage.setItem('user', JSON.stringify(newUserWithId));
//     setUser(newUserWithId);
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   const generateRandomId = () => {
//     const existingIds = users.map((user) => parseInt(user.id));
//     let randomId;
//     do {
//       randomId = Math.floor(Math.random() * 999) + 1;
//     } while (existingIds.includes(randomId));

//     return randomId.toString().padStart(3, '0');
//   };

//   return (
//     <UserContext.Provider value={{ user, login, logout, register }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserProvider;


//-------------------------

import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const initialStateUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialStateUsers = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(initialStateUsers);
  const [user, setUser] = useState(initialStateUser);

  const getUsers = async () => {
    const res = await fetch("users.json");
    const users = await res.json();
    setUsers(users);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (users.length === 0) {
      getUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  const login = (email, password) => {
    const userDB = users.find(
      (item) => item.email === email && password === item.password
    );
    if (userDB) {
      setUser(userDB);
    } else {
      setUser(null);
    }

    return userDB;
  };

  const register = (user) => {
    const userDB = users.find((item) => item.email === user.email);
    if (userDB) return userDB;
    setUser(user);
    setUsers([...users, user]);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const updateUser = (user) => {
    setUser(user);
    const usersUpdate = users.map((item) =>
      item.id === user.id ? user : item
    );
    setUsers(usersUpdate);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, register, updateUser, users }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

