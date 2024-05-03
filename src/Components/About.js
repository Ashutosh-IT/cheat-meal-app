import logo from "../assets/img/logo.png";

const About = function () {
  return (
    <div className="about">
      <div className="about-left">
        <h1>Cheat Meal</h1>
        <p>
          At Cheat Meal, we're passionate about connecting people with delicious
          food from their favorite local restaurants. Our mission is simple: to
          make ordering food online convenient, reliable, and enjoyable for
          everyone
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Convenience</li>
          <li>Quality</li>
          <li>Fast Delivery</li>
        </ul>
      </div>
      <div className="about-right">
        <img src={logo} alt="logo"></img>
      </div>
    </div>
  );
};

export default About;
