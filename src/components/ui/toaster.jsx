import React from "react";
import toast, { Toaster } from "react-hot-toast";

function ToastContainer() {
  return <Toaster position={"top-right"} />;
}

export const SuccessToaster = (message) => {
  toast.success(message, {
    style: {
      backgroundColor: "#131315",
      color: "white",
    },
  });
};

export const ErrorToaster = (message) => {
  toast.error(message, {
    style: {
      backgroundColor: "#131315",
      color: "white",
    },
  });
};

export default ToastContainer;
