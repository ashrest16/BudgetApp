import InputCard from "./InputCard"
import BudgetList from "./BudgetList"
import PropTypes from 'prop-types';

function Budget({budget,setBudget}){
    
    return(
        <div className="flex m-4 p-4 flex-row justify-between gap-4 h-full">
        <InputCard setBudget={setBudget}/>
        <div className= "basis-3/4">
        <BudgetList budget = {budget}/>
        </div>
        </div>
    )
}

Budget.propTypes = {
    budget: PropTypes.array,
    setBudget: PropTypes.func.isRequired
}

export default Budget