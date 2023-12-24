import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
              <Avatar>
                <AvatarImage src={`/img/${el.image}`} alt="recipe image" />
                <AvatarFallback>{el.title.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{el.title}</CardTitle>
                <CardDescription>{el.time} mins to cook.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{el.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>View recipe</Button>
              {el.vegan && <Badge variant="secondary">Vegan !!!</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
