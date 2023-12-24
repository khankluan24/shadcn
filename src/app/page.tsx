import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Recipe {
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
  id: string;
}

const fetchRecipes = async (): Promise<Recipe[]> => {
  const result = await fetch("http://localhost:3001/recipes");
  return result.json();
};
export default async function Home() {
  const recipes = await fetchRecipes();
  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {recipes.map((el) => (
          <Card key={el.id} className="flex flex-col justify-between">
            <CardHeader className="flex gap-4 items-center">
              <CardTitle>{el.title}</CardTitle>
              <CardDescription>{el.time} mins to cook.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{el.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <button>View recipe</button>
              {el.vegan && <p>Vegan !!!</p>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
