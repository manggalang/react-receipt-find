import { Container, Group, Burger, Anchor } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderSimple.module.css";

const links = [
  { link: "/", label: "Beranda" },
  { link: "/about", label: "Tentang" },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <h1>RecipeFind</h1>
        <Group gap={16} visibleFrom="xs">
          {links.map((item) => (
            <Anchor href={item.link} key={item.label} c="green" fw={600}>
              {item.label}
            </Anchor>
          ))}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
