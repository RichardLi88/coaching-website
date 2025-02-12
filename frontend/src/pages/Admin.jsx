import { useContext, useEffect, useState } from "react";
import Background from "../components/utility/Background";
import { Flex, ScrollArea, ScrollAreaAutosize, Title } from "@mantine/core";
import { getUsers } from "../utility/fetchAuthentication";
import UserCard from "../components/admin/UserCard.jsx";
import { AdminContext } from "../contexts/AdminContext.jsx";
import SkeletonUserCard from "../components/admin/SkeletonUserCard.jsx";

function Admin() {
  const { users, setUsers } = useContext(AdminContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function retrieveUsers() {
      const data = await getUsers();
      setUsers(data);
      setTimeout(() => {
        setLoading(false);
      }, 350);
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
          bg="lightblue"
        >
          <Title ta="center">List of Users</Title>
          <ScrollAreaAutosize p={20}>
            {!loading &&
              users.map((user) => {
                return <UserCard user={user} key={user._id} />;
              })}
            {loading &&
              Array.from({ length: 8 }).map((_, index) => {
                return <SkeletonUserCard key={index} />;
              })}
          </ScrollAreaAutosize>
        </Flex>
      </Background>
    </>
  );
}

export default Admin;
