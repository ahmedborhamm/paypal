import React, { useEffect } from "react";
function App() {
  useEffect(()=>{
    window.paypal.Buttons({
      creteOrder:(data,actions)=>{
        return actions.order.create({
          purchase_units:[{
            amount:{
              value:600.00,
            }
          }]
        });
      },
      onApprove: function (data, actions) {
        console.log("done")
        return actions.order.capture().then( details =>{
          window.open("http://osamaelkassaby.com");
          alert("complete by "+details.payer.name.given_name)
          console.log(details)
        })
      },
    }).render('#paypal-button-container');
  },[])
// START ///


/*code here */


//HERER///
  return (

    <div id="paypal-button-container">
          <input type='text' />

    </div>
    
  );
}

export default App;
