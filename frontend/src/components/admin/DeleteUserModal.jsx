import { Modal, Flex, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconTrash } from "@tabler/icons-react";
import { useContext, useState } from "react";
import SuccessNotif from "../popups/SuccessNotif.jsx";
import { deleteUser, getUsers } from "../../utility/fetchAuthentication.js";
import { AdminContext } from "../../contexts/AdminContext.jsx";

function DeleteUserModal({ user }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [success, setSuccess] = useState(false);
  const { setUsers } = useContext(AdminContext);

  async function deleteHandler() {
    const result = await deleteUser(user._id);
    if (result.success) {
      setSuccess(true);
      const newUserList = await getUsers();
      setUsers(newUserList);

      setTimeout(() => {
        setSuccess(false);
        close();
      }, 500);
    }
  }

  return (
    <>
      <Modal opened={opened} onClose={close} title="Delete User" centered>
        <Flex direction="column">
          Are you sure you want to remove this user?
          <Flex gap={20} justify="end">
            <Button
              variant="gradient"
              gradient={{ from: "blue", to: "cyan", deg: 90 }}
              mt={20}
              onClick={close}
            >
              Cancel
            </Button>
            <Button
              variant="gradient"
              gradient={{ from: "red", to: "brown", deg: 90 }}
              onClick={deleteHandler}
              mt={20}
              rightSection={<IconTrash />}
            >
              Confirm
            </Button>
          </Flex>
          {success && (
            <SuccessNotif
              close={() => setSuccess(false)}
              title="Successfully deleted User"
              reason="User is removed from database."
            />
          )}
        </Flex>
      </Modal>

      <Button
        variant="gradient"
        gradient={{ from: "red", to: "brown", deg: 90 }}
        onClick={open}
      >
        <IconTrash />
      </Button>
    </>
  );
}

export default DeleteUserModal;
