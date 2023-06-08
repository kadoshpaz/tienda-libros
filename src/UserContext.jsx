import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUsersFromJson();
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const getUsersFromJson = async () => {
    try {
      const res = await fetch('users.json');
      const data = await res.json();

      setUsers(data);
    } catch (error) {
      console.error(error);
      setUsers([]);
    }
  };

  const login = async (email, password) => {
    const userDB = users.find((item) => item.email === email && item.password === password);

    if (userDB) {
      setUser(userDB);
    } else {
      setUser(null);
    }

    return userDB;
  };

  const register = (newUser) => {
    const randomId = generateRandomId();
    const newUserWithId = { id: randomId, ...newUser };
    setUsers([...users, newUserWithId]);

    localStorage.setItem('user', JSON.stringify(newUserWithId));
    setUser(newUserWithId);
  };

  const logout = () => {
    setUser(null);
  };

  const generateRandomId = () => {
    const existingIds = users.map((user) => parseInt(user.id));
    let randomId;
    do {
      randomId = Math.floor(Math.random() * 999) + 1;
    } while (existingIds.includes(randomId));

    return randomId.toString().padStart(3, '0');
  };

  return (
    <UserContext.Provider value={{ user, login, logout, register }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;