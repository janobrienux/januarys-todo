
import React from "react";
// import clockBkg from "./images/clock-background"

const Clock = () => {
  return (
    <>
    <section className="timer-container">
      <section className="timer">
        <div>
          <span className="calendar-clock">
            <h1>Countdown to Graduation</h1>
            <p>All of your hard work is paying off, here's to completing something BIG!</p>
          </span>
        </div>
      </section>
      <p>87</p>
      <p>Days</p>
    </section>
      <span>:</span>
    <section>
      <p>87</p>
      <p>Hours</p>
    </section>
      <span>:</span>
    <section>
      <p>87</p>
      <p>Minutes</p>
    </section>
      <span>:</span>
      <section>
      <p>87</p>
      <p>Seconds</p>
    </section>
      <span>:</span>
    </>
  );
};
export default Clock;

