import PropTypes from 'prop-types';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "../../components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";

function AddTransaction({ setTransactions, budget }) {
  const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      cost: 0,
      tabValue: "Expense",
      category: "",
    },
  });

  const tabValue = watch('tabValue');

  const onSubmit = (data) => {
    const formatDate = new Date().toISOString().split('T')[0];
    const newTransaction = {
      name: data.name,
      category: data.category,
      cost: parseFloat(data.cost),
      type: data.tabValue,
      date: formatDate,
    };
    setTransactions(d => [...d, newTransaction]);
    reset();
  };

  const expenseCategory = budget.map(item => item.category);
  const incomeCategory = ["Work", "Dividend", "Side Gig", "Misc"];

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Transaction</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Name of your Transaction"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="cost">Amount</Label>
                <Input
                  id="cost"
                  placeholder="Amount of your Transaction"
                  type="number"
                  {...register("cost", {
                    required: "Budget amount is required",
                    min: {
                      value: 1,
                      message: "Budget amount must be greater than 0"
                    }
                  })}
                />
                {errors.cost && <p className="text-red-500 text-sm">{errors.cost.message}</p>}
              </div>
              <Tabs value={tabValue} onValueChange={(value) => setValue('tabValue', value)} className="w-[300px]">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="Expense">Expense</TabsTrigger>
                  <TabsTrigger value="Income">Income</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={watch('category')}
                  onValueChange={(value) => setValue('category', value)}
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {(tabValue === "Expense" ? expenseCategory : incomeCategory).map((element, index) => (
                      <SelectItem value={element} key={index}>{element}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => reset()}>Reset</Button>
          <Button type="submit" onClick={handleSubmit(onSubmit)}>Enter</Button>
        </CardFooter>
      </Card>
    </>
  );
}

AddTransaction.propTypes = {
  setTransactions: PropTypes.func,
  budget: PropTypes.array
};

export default AddTransaction;
