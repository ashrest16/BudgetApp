import PropTypes from 'prop-types';
import AddTransaction from "./AddTransaction"
import Display from "./Display"
function Transaction({transactions, isPending, setTransactions,budget}){
    return (
        <div className="flex m-4 p-4 flex-row justify-between gap-4">
        <AddTransaction 
        setTransactions={setTransactions}
        budget={budget}
        />
        <div className="basis-3/4">
        {isPending && <div className='text-center'>Loading...</div>}
        {transactions && 
        <Display 
            transactions={transactions} 
            setTransactions={setTransactions} 
        />}
        </div>
      </div>
    )
}
Transaction.propTypes = {
    transactions : PropTypes.arrayOf(PropTypes.object),
    isPending: PropTypes.bool,
    setTransactions: PropTypes.func.isRequired,
    budget: PropTypes.array
}

export default Transaction