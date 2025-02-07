import { Box, NavLink } from "@mantine/core";

import {
  IconChartBarPopular,
  IconDatabase,
  IconNotebook,
  IconChevronRight,
} from "@tabler/icons-react";

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
  return (
    <Box w={`20%`} maw={`400px`}>
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
  );
}

export default MemberSideBar;
