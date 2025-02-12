import { createContext, useState } from "react";

export const AdminContext = createContext();

function AdminProvider({ children }) {
  const [users, setUsers] = useState([]);

  return (
    <AdminContext.Provider value={{ users, setUsers }}>
      {children}
    </AdminContext.Provider>
  );
}

export default AdminProvider;
