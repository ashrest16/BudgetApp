import { Progress } from "@/components/ui/progress";
import PropTypes from 'prop-types';

function BudgetList({ budget }) {
  return (
    <div className="rounded border p-4 h-4/5">
      <h1 className="text-3xl font-semibold leading-none tracking-tight">Budget</h1>
      <p className="text-l text-muted-foreground mt-1 mb-4">List of your budget</p>

      {budget && budget.length > 0 ? (
        budget.map((item, index) => (
          <div key={index} className="mb-4 p-2 bg-white shadow-sm">
            <div className="mb-1">
              <h2 className="text-xl font-bold">{item.category}</h2>
              {item.description && <p className="text-sm text-gray-500">{item.description}</p>}
            </div>
            <div className="flex items-center justify-between w-full">
              <Progress
                value={(item.spent / item.amount) * 100}
                className="w-[60%]"
              />
              <span className="ml-2">
                {item.spent}/{item.amount}
              </span>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center mt-4">
          <img 
          src="/assets/emptybudget.png" 
          alt="Budget is Empty" 
          className="mx-auto mb-4 w-1/2 h-auto max-w-xs rounded-full" 
          />
          <p className="text-lg text-muted-foreground">Your budget list is currently empty. Start by adding a new budget.</p>
        </div>
      )}
    </div>
  );
}

BudgetList.propTypes = {
  budget: PropTypes.array
};

export default BudgetList;
