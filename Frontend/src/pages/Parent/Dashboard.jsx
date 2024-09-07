import { Outlet } from 'react-router-dom';
import { useFetch, useBudgetFetch } from "@/useFetch";

function Dashboard() {
  const { data: transactions, isPending: isPendingTransactions, error: transactionsError, setData: setTransactions } = useFetch("http://localhost:8000/transactions");

  const { budget, isPending: isPendingBudget, error: budgetError, setBudget } = useBudgetFetch("http://localhost:8000/budget");

  const isPending = isPendingTransactions || isPendingBudget;
  const error = transactionsError || budgetError;

  return (
    <div>
      <Outlet context={{ transactions, setTransactions, budget, setBudget, isPending, error }} />
    </div>
  );
}

export default Dashboard;
