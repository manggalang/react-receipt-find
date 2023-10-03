import { useLoaderData, Form, useActionData, Link } from "react-router-dom";
import {
  Button,
  Card,
  SimpleGrid,
  Image,
  Text,
  Input,
  Flex,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export async function loader() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=",
    { method: "GET" }
  );
  const meals = await response.json();

  return meals;
}

export async function action({ request }) {
  const formData = await request.formData();
  const search = formData.get("search");
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
    { method: "GET" }
  );
  const meals = await response.json();

  return meals;
}

export default function PageMenus() {
  const data = useLoaderData();
  const dataSearch = useActionData();
  console.log("🚀 ~ file: home.jsx:38 ~ PageMenus ~ dataSearch:", dataSearch);

  return (
    <main>
      <Form method="post">
        <Flex gap="md" justify="flex-end" align="center" direction="row">
          <Input
            name="search"
            placeholder="Cari menu"
            leftSection={<IconSearch size={16} />}
          />
          <Button type="submit" variant="filled" color="green">
            Search
          </Button>
        </Flex>
      </Form>
      <SimpleGrid
        my={60}
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {dataSearch &&
          dataSearch.meals?.map((meal) => (
            <Card
              key={meal.idMeal}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
            >
              <Card.Section>
                <Image src={meal.strMealThumb} height={160} alt="Norway" />
              </Card.Section>

              <Text fw={500} mt="md" mb="xs">
                {meal.strMeal}
              </Text>

              <Text lineClamp={4} size="sm" c="dimmed">
                {meal.strInstructions}
              </Text>

              <Button
                variant="filled"
                color="green"
                component={Link}
                to={`/detail/${meal.idMeal}`}
                fullWidth
                mt="md"
                radius="md"
              >
                Show Detail
              </Button>
            </Card>
          ))}
        {!dataSearch &&
          data.meals?.map((meal) => (
            <Card
              key={meal.idMeal}
              component={Link}
              to={`/detail/${meal.idMeal}`}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
            >
              <Card.Section>
                <Image src={meal.strMealThumb} height={160} alt="Norway" />
              </Card.Section>

              <Text fw={500} mt="md" mb="xs">
                {meal.strMeal}
              </Text>

              <Text lineClamp={4} size="sm" c="dimmed">
                {meal.strInstructions}
              </Text>

              <Button
                variant="filled"
                color="green"
                fullWidth
                mt="md"
                radius="md"
              >
                Show Detail
              </Button>
            </Card>
          ))}

        {dataSearch && !dataSearch.meals && <p>Oops menu not found</p>}
      </SimpleGrid>
    </main>
  );
}
