import React, { useState } from "react";
import './Contact.css';
import Category from "../components/Category";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const addContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.phoneNumber) {
      setIsModalOpen(true);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(contactForm.email)) {
      setIsModalOpen(true);
      alert("올바른 양식으로 작성해주세요.");
      return;
    }

    

    setContactForm({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <Category/>
      <h1>Contact us</h1>
      {isModalOpen && (
        <div className="modal">
        <p className="modal-message">내용 입력을 완료해주세요.</p>
        <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>닫기</button>
      </div>
      )}

      <form onSubmit={addContactSubmit} className="contact-form">
        <div className="form-group">
          <label>이름 :</label>
          <input
            type="text"
            name="name"
            placeholder="성함을 입력해주세요"
            value={contactForm.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="email 형식으로 입력해주세요"
            value={contactForm.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>전화번호:</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="전화번호룰 입력해주세요"
            value={contactForm.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            rows="5"
            placeholder="요청사항을 입력해주세요"
            value={contactForm.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">입력완료</button>
      </form>
    </div>
  );
};

export default Contact;
