import React from "react";
import { Card, Row } from "antd";

function Cards({
  currentBalance,
  income,
  expenses,
  showExpenseModal,
  showIncomeModal,
  cardStyle,
  reset,
}) {
  return (
    <Row className="card-container">
      <Card className="card" style={cardStyle}>
        <h2>Current Balance</h2>
        <p>₹{currentBalance}</p>
        <div className="btn btn-blue" style={{ margin: 0 }} onClick={reset}>
          Reset Balance
        </div>
      </Card>

      <Card className="card" style={cardStyle}>
        <h2>Total Income</h2>
        <p>₹{income}</p>
        <div className="btn btn-blue" style={{ margin: 0 }} onClick={showIncomeModal}>
          Add Income
        </div>
      </Card>

      <Card className="card" style={cardStyle}>
        <h2>Total Expenses</h2>
        <p>₹{expenses}</p>
        <div className="btn btn-blue" onClick={showExpenseModal}>
          Add Expense
        </div>
      </Card>
    </Row>
  );
}

export default Cards;
