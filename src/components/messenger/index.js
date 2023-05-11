import { FaFacebookMessenger } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { useState } from "react";
import Modal from "../modal";

function Messenger() {
  return (
    <div className="fixed z-10 bottom-[76px] right-6 cursor-pointer">
      <div className="p-[10px] text-white rounded-full bg-primary-red messenger">
        <FaFacebookMessenger className="w-6 h-6 " />
      </div>
    </div>
  );
}

export default Messenger;
