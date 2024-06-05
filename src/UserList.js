import axios from "axios";
import { useState, useEffect } from "react";
const UserList = () => {
  const [listOfUSers, setlistOfUSers] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setlistOfUSers(response.data);
    };
    fetchdata();
  }, []);

  return (
    <div>
      <>
        <table >
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>adresse city</th>
              <th>phone</th>
            </tr>
          </thead>
          <tbody>
            {listOfUSers.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  );
};

export default UserList;