import React, { useState } from "react";
import "./modal.css";
import { BiClinic } from "react-icons/bi";
import { MdOutlinePhone } from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";
import { RiHome2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { IoArrowDownOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { LiaToothSolid } from "react-icons/lia";
import Dropdown from "./Dropdown";

const BookAppointmentModal = ({ show, onHide, onSelect }) => {
  const [inputs, setInputs] = useState({});
  const [activeButton, setActiveButton] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState("");

  const handleDateTimeChange = (event) => {
    setSelectedDateTime(event.target.value);
    // If both date and time are selected, submit
    if (event.target.value && onSelect) {
      const dateTime = new Date(event.target.value);
      onSelect(dateTime);
    }
  };
  const handleClose = () => {
    onHide(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const function1 = () => {
    console.log("Clinic Visit");
  };

  const function2 = () => {
    console.log("Voice call");
  };

  const function3 = () => {
    console.log("Video Call");
  };

  const function4 = () => {
    console.log("Home Call");
  };
  const options = [
    { text: "Dental Crown", icon: <LiaToothSolid /> },
    { text: "Dental Braces", icon: <LiaToothSolid /> },
    { text: "Decayed Tooth", icon: <LiaToothSolid /> },
    { text: "Carbide Finishing Bur", icon: <LiaToothSolid /> },
    { text: "Decayed Tooth", icon: <LiaToothSolid /> },
  ];

  const handleSelect = (option) => {
    console.log("Selected option:", option.text);
    // Add your logic here
  };
  const buttons = [
    { name: "Clinic Visit", icon: <BiClinic />, onClick: function1 },
    { name: "Voice call", icon: <MdOutlinePhone />, onClick: function2 },
    { name: "Video Call", icon: <BsCameraVideo />, onClick: function3 },
    { name: "Home Call", icon: <RiHome2Line />, onClick: function4 },
  ];

  const handleButtonClick = (buttonName, onClickFunction) => {
    setActiveButton(buttonName);
    onClickFunction();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(inputs));
    console.log(inputs);
  };

  return (
    <div className={`modal-overlay ${show ? "show" : ""}`}>
      <div className="modal-container">
        <div className="bk-hd">
          <span className="bk-ttl">
            Treatments starting at as low as
            <span className="bk-subttl">200 rs.</span>
            per session.
          </span>
          <IoMdClose className="modal-close" onClick={handleClose} />
        </div>
        <span className="bk-title">Make An Appointment</span>

        <div className="book-btn">
          {buttons.map((button, i) => (
            <div className="book-item" key={button.name + i}>
              <button
                className={activeButton === button.name ? "active" : "inactive"}
                onClick={() => handleButtonClick(button.name, button.onClick)}
              >
                {button.icon}
              </button>
              <label
                className={
                  activeButton === button.name ? "lblactive" : "lblinactive"
                }
              >
                {button.name}
              </label>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="book-form">
          <div className="form-input1">
            <input
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
              placeholder="Enter Name"
              className="input-val"
            />
          </div>
          <div className="form-input4">
            <input
              type="datetime-local"
              id="dateTimeInput"
              value={selectedDateTime}
              onChange={handleDateTimeChange}
              placeholder="Choose Date & Time"
            />
            <IoArrowDownOutline
              style={{
                fontSize: "12px",
                color: "white",
                padding: "6px",
                borderRadius: "100px",
                background: "#372f62",
              }}
            />
          </div>
          {/* <div className="time-grid">
            {generateTimeSlots().map((time, index) => (
              <div
                key={index}
                className="time-cell"
                onClick={() => handleTimeSelect(time)}
              >
                {time}
              </div>
            ))}
          </div> */}

          <div className="form-input2">
            <Dropdown
              options={options}
              onSelect={handleSelect}
              defaultText="Choose Service"
            />
          </div>

          <div className="form-input4">
            <input
              type="text"
              name="ChooseDoctor"
              value={inputs.testAndMedicine || ""}
              onChange={handleChange}
              placeholder="Choose Doctor"
              className="input-val"
            />
            <IoArrowDownOutline
              style={{
                fontSize: "12px",
                color: "white",
                padding: "6px",
                borderRadius: "100px",
                background: "#372f62",
              }}
            />
          </div>
          <div className="form-input4">
            <input
              type="text"
              name="testAndMedicine"
              value={inputs.testAndMedicine || ""}
              onChange={handleChange}
              placeholder="Choose Test & Medicine"
              className="input-val"
            />
            <IoArrowDownOutline
              style={{
                fontSize: "12px",
                color: "white",
                padding: "6px",
                borderRadius: "100px",
                background: "#372f62",
              }}
            />
          </div>
          <input type="submit" value="BOOK NOW" className="form-submit" />
        </form>
        <div className="bk-doc-details">
          <div className="bk-doc-name-prof">
            <span className="bk-doc-name">
              Doctor : <span className="bk-docname">Dr. Karen Lane</span>
            </span>
            <span className="bk-doc-code">
              Code : <span className="bk-code">87563</span>
            </span>
          </div>
          <div className="bk-contact">
            <FaWhatsapp className="bk-whatsapp" />
            <MdOutlinePhone className="bk-phone" />
          </div>
        </div>
        <span className="bk-address">
          Clinic Address :
          <span className="bk-add">
            #31, Diamond Plaza, 3rd Floor, Boltz street, Delhi
          </span>
        </span>
      </div>
    </div>
  );
};

export default BookAppointmentModal;
