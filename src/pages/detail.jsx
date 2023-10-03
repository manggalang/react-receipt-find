import { Badge, Flex, Image, Text } from "@mantine/core";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const response = await fetch(
    `https://themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
  );
  const json = await response.json();

  return json;
}

export default function PageDetailMenu() {
  const data = useLoaderData();
  console.log(data.meals[0]);

  return (
    <div>
      <Image
        src={data.meals[0].strMealThumb}
        height={350}
        w={768}
        fit="cover"
        radius="md"
      />
      <Flex gap="md" justify="flex-start" align="flex-start" mt={15}>
        <Badge color="red" variant="light" radius="sm">
          {data.meals[0].strCategory}
        </Badge>
        <Badge color="pink" variant="light" radius="sm">
          {data.meals[0].strArea}
        </Badge>
      </Flex>
      <h2>{data.meals[0].strMeal}</h2>
      <Text w={768} align="justify">
        {data.meals[0].strInstructions}
      </Text>
    </div>
  );
}
