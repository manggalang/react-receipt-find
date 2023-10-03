import { Container, Group, Anchor } from "@mantine/core";
import classes from "./FooterSimple.module.css";

const links = [
  { link: "/", label: "Beranda" },
  { link: "/about", label: "Tentang" },
];

export function FooterSimple() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <h1>RecipeFind</h1>
        <Group className={classes.links}>
          {links.map((item) => (
            <Anchor href={item.link} key={item.label} c="grape" fw={600}>
              {item.label}
            </Anchor>
          ))}
        </Group>
      </Container>
    </div>
  );
}
