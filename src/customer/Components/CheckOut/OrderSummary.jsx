import React from "react";
import AddressCard from "./AddressCard";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";
import Footer from "../Footer/Footer";

const OrderSummary = () => {
  //
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard />
      </div>
      <div className="lg:grid grid-cols-3 relative mt-3">
        <div className="lg:col-span-2 lg:px-5 bg-white">
          <div className=" space-y-3">
            {[1, 1, 1, 1].map((item) => (
              <>
                <CartItem item={item} showButton={true} />
              </>
            ))}
          </div>
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt- lg:mt-0 ">
          <div className="border p-5 bg-white shadow-lg rounded-md">
            <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
            <hr />

            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black ">
                <span>Price</span>
                <span>₹4697</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-700">-₹3419</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-700">Free</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span className="text-green-700">₹1278</span>
              </div>
            </div>

            <Button
              variant="contained"
              type="submit"
              sx={{
                padding: ".8rem 2rem",
                marginTop: "2rem",
                width: "100%",
              }}
            >
              Check Out
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderSummary;
