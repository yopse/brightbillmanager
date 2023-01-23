import React from "react";
import { Link } from "react-router-dom";

function BillToPay() {
  return (
    <>
      <div className="alert alert-secondary">
        <Link to="/payingbills" className="text-none">
          Bills To Pay
        </Link>
      </div>
    </>
  );
}

export default BillToPay;
