import React, {useState} from "react";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({expense, income, addTransaction}) => {
    const [isShow, setIsShow] = useState(false);
    return (
        <>
            <div className="topSection">
              <h4>Account Balance : {income - expense}</h4>
                <button
                    onClick={() => setIsShow(prevState => !prevState)}
                    className={`btn ${isShow && "cancel"}`}
                >
                    {isShow ? "Cancel" : "Add"}
                </button>
            </div>
            {isShow && <TransActionForm addTransaction={addTransaction} setIsShow={setIsShow}/>}
            <div className="resultSection">
                <div className="expenseBox">Expense <span style={{color: "red"}}>{expense} $</span></div>
                <div className="expenseBox">Income <span>{income} $</span></div>
            </div>
        </>
    )
};

export default OverViewComponent;