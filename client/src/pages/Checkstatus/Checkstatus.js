import React from 'react'
import "./Checkstatus.css"
import { useQuery } from '@apollo/react-hooks';
import { QUERY_CUSTOMER } from "../utils/queries";


function checkstatus () {

  const { data } = useQuery(QUERY_CUSTOMER);
  let customer;

  if (data) {
    customer = data.customer;
  }
    
  return (
  <>
    {customer ? (
      <>
      <h2>Vehicle History for {customer.firstName} {customer.lastName}</h2>
      {customer.repairs.map((repair) => (
        <div key={repair._id} className="my-2">
          <h3>{new Date(parseInt(repair.purchaseDate)).toLocaleDateString()}</h3>
          <div className="flex-row">
            {repair.parts.map(({ _id, name, price }, index) => (
              <div key={index} className="card px-1 py-1">
                  <p>{name}</p><hr />
                  <p>{description}</p><hr />
                  <p>{quantity}</p><hr />
                <div>
                  <span>${price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
      ) : null}
    </>);
  };
  
export default checkstatus;