import './App.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {addCashAction, getCashAction} from "./store/cashReducer";


function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

    const addCash = (cash) => {
        // dispatch({type: "ADD_CASH", payload: cash})
        dispatch(addCashAction(cash))
    }

    const getCash = (cash) => {
        // dispatch({type: "GET_CASH", payload: cash})
        dispatch(getCashAction(cash))
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <div className={"app"}>
            <div style={{fontSize: '3rem'}}>{cash}</div>
            <div style={{display: 'flex'}}>
                <button onClick={() => addCash(Number(prompt("Введите сумму")))}>Пополнить счет</button>
                <button onClick={() => getCash(Number(prompt("Введите сумму")))}>Снять со счета</button>
                <button onClick={() => addCustomer(prompt("Введите имя"))}>Добавить клиента</button>
                <button onClick={() => getCash(Number(prompt("Введите сумму")))}>Удалить клиента</button>
            </div>
            {customers.length > 0 ?
                <div>
                    {customers.map(customer =>
                        <div onClick={() => removeCustomer(customer)} style={{fontSize: '2rem', border: '1px solid black', padding: '10px', marginTop: 5}}>
                            {customer.name}
                        </div>
                    )}
                </div>
                :
                <div  style={{fontSize: '2rem'}}>
                    Клиенты отсутствуют
                </div>

            }

        </div>
    );
}

export default App;
