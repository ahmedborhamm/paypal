import React, { useState } from "react";
import { useEffect } from "react";
const Page1 = ({ price }) => {
  useEffect(() => {
    window.paypal
      .Buttons({
        creteOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: price,
                },
              },
            ],
          });
        },
        onApprove: function (data, actions) {
          console.log("done");
          return actions.order.capture().then((details) => {
            window.open("/src/components/alert.js");
            alert("complete by " + details.payer.name.given_name);
            console.log(details);
          });
        },
      })
      .render("#paypal-button-container");
  }, []);

  return (
    <div
      style={{ width: "50%" }}
      id="paypal-button-container"
      className="container pt-3 "
    >
      <h1
        className="pt-1 pb-2"
        style={{
          textAlign: "end",
          fontSize: "25px",
          color: "black",
        }}
      >
        اختر طريقه الدفع
      </h1>
    </div>
  );
};

export default Page1;
