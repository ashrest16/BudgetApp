import { Button } from "@/components/ui/button"
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form";
function InputCard({setBudget}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const resetForm = () => {
      reset({ name: "", value: 0 });
    };

    const onSubmit = (data) => {
      const newBudget = { category: data.name, amount: parseFloat(data.value), spent: 0 };
      setBudget(b => [...b, newBudget]);
      resetForm();
    };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Budget</CardTitle>
        <CardDescription>Create a new budget category in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input 
              id="name" 
              placeholder="Name of your budget" 
              {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Budget</Label>
              <Input 
              id="budget"
              placeholder="Total Budget"
              type="number"
              {...register("value", {
                required: "Budget amount is required",
                min: {
                  value: 1,
                  message: "Budget amount must be greater than 0"
                }
              })}
              />
              {errors.value && <p className="text-red-500 text-sm">{errors.value.message}</p>}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={reset}>Reset</Button>
        <Button type="submit" onClick={handleSubmit(onSubmit)}>Create</Button>
      </CardFooter>
    </Card>
  )
}

export default InputCard

InputCard.propTypes = {
  setBudget : PropTypes.func.isRequired
}