import React from 'react';
import './About_us.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
    <div className="about-us-banner"></div>
      <div className="about-content">
      <h1 className="about-title">About Us</h1>
        <p className="about-text">
        <li><strong>Who We Are</strong></li>
        Founded in 2020, our mission is to deliver high-quality vacuum packing services that prioritize freshness, hygiene, and total customer satisfaction. Backed by a passionate team of experts, we are committed to preserving the natural taste and shelf life of every product we pack.
        <li><strong>What We Do</strong></li>
          <ul>
            <p>Food Packing: Ideal for restaurants, meal prep businesses, and home cooks looking to preserve vegetables, home cooked food and ready made meals.</p>
            <p>Non-Food Packing: We also vacuum pack electronics,  cloths, blanket, bridle wear and sensitive items that requireprotection from moisture and air.</p>
            <p>Custom Orders: Whether it's short runs or large batches, we customize every order to meet your specification.</p>
          </ul>

        <li><strong>Why Choose Us?</strong></li>
          <ul>
            <p>State-of-the-Art Equipment: We use industrial-grade vacuum sealers to guarantee consistent and airtight results..</p>
            <p>Hygienic Standards: Cleanliness and safety are at the core of our process, especially for food-related packaging.</p>
            <p>Fast Turnaround: We respect your time—offering prompt service without compromising on quality.</p>
          </ul>
       

        </p>
      </div>
    </div>
  );
};

export default AboutUs;
