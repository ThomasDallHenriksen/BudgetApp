import { useBudgets } from "../contexts/budgetsContext"
import BudgetCard from "./budgetCard"

export default function TotalBudgetCard() {
  const { expenses, budgets } = useBudgets()
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0)
  const max = budgets.reduce((total, budget) => total + budget.max, 0)
  if (amount === 0) return null

  return <BudgetCard amount={amount} name="Total" gray max={max} hideButtons />
}