import { createContext, useState } from 'react';
import { save, load, remove } from '../../utils/storage';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(load(`user`) || []);

  const store = (u) => {
    setUser(u);
    save(`user`, u);
  };

  const addUser = (userData) => {
    store(userData);
  };

  const removeAllUser = () => {
    setUser([]);
    remove(`user`);
  };

  return (
    <UserContext.Provider value={{ user, removeAllUser, addUser }}>{children}</UserContext.Provider>
  );
}

export default UserContext;
