import { Box, Flex, NavLink, Select } from "@mantine/core";
import styles from "../../css/components/MemberC.module.css";
import {
  IconChartBarPopular,
  IconDatabase,
  IconNotebook,
  IconChevronRight,
} from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";

const items = [
  {
    icon: IconChartBarPopular,
    label: "Training volume",
    rightSection: <IconChevronRight size={16} stroke={1.5} />,
  },
  {
    icon: IconNotebook,
    label: "Log training",
    rightSection: <IconChevronRight size={16} stroke={1.5} />,
  },
  {
    icon: IconDatabase,
    label: "Training log history",
    rightSection: <IconChevronRight size={16} stroke={1.5} />,
  },
];

function MemberSideBar({ value }) {
  const { active, setActive } = value;
  const screen = useMediaQuery("(max-width: 800px)");
  const [val, setVal] = useState(null);

  return (
    <>
      <Box w={`20%`} maw={`400px`} display={screen ? "none" : ""}>
        {items.map((item, index) => {
          return (
            <NavLink
              href="#required-for-focus"
              key={item.label}
              variant="filled"
              active={index === active}
              label={item.label}
              leftSection={<item.icon size={16} stroke={1.5} />}
              rightSection={item.rightSection}
              onClick={() => setActive(index)}
            />
          );
        })}
      </Box>
      {screen && (
        <Select
          label="Options"
          defaultValue={"0"}
          display="inline-block"
          mb={10}
          data={[
            { value: "0", label: "Training Volume" },
            { value: "1", label: "Log Training" },
            { value: "2", label: "Training log history" },
          ]}
          val={val ? val.value : null}
          onChange={(_val, option) => {
            console.log(_val);
            setActive(parseInt(_val));
          }}
        />
      )}
    </>
  );
}

export default MemberSideBar;
