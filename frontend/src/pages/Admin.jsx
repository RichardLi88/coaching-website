import { useEffect, useState } from "react";
import Background from "../components/utility/Background";
import { Flex, Title } from "@mantine/core";
import { getUsers } from "../utility/fetchAuthentication";

import UserCard from "../components/UserCard.jsx";

function Admin() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function retrieveUsers() {
      const data = await getUsers();
      setUsers(data);
    }
    retrieveUsers();
  }, []);

  return (
    <>
      <Background>
        <Flex
          direction="column"
          p={20}
          justify="start"
          w="84vw"
          mx="8vw"
          h="90vh"
          bg="white"
        >
          <Title ta="center">List of Users</Title>
          {users.map((user) => {
            return <UserCard user={user} key={user._id} />;
          })}
        </Flex>
      </Background>
    </>
  );
}

export default Admin;
