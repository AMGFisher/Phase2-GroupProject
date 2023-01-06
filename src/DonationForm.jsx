// import "./styles.css";
import { useRef, useState, useEffect } from "react";

export default function DonationForm() {
  const [amount, setAmount] = useState(0);
  const [donors, setDonors] = useState(0);
  const [total, setTotal] = useState(0);

  const input = useRef();
  const progress = useRef();
  const arrow = useRef();

  const donationGoal = 5000;

  useEffect(() => {
    handleProgressTrackers();
  });

  function handleSubmit(e) {
    e.preventDefault();

    handleFormValidation(e);
  }

  function handleChange(e) {
    setAmount(e.target.valueAsNumber);
  }

  function handleFormValidation(e) {
    if (input.current.value == "") {
      return;
    } else {
      setDonors((prevState) => prevState + 1);
      setTotal((prevState) => prevState + amount);

      e.target.reset();
    }
  }

  function toggleDonationTracker() {
    if (total >= donationGoal) {
      return `Project has been funded! $${Math.abs(
        donationGoal - total
      )} over goal`;
    } else {
      return `$${donationGoal - total} still needed to fund this project.`;
    }
  }

  function handleProgressTrackers() {
    let progressValue = (total / donationGoal) * 100;

    progress.current.style.transition = `width 0.3s`;
    progress.current.style.width = `${progressValue}%`;

    arrow.current.style.transition = `left 0.3s`;

    // Start arrow tracking when total reaches 2%
    if (progressValue >= 2) {
      arrow.current.style.left = `${progressValue - 2}%`;
    }

    // Stop arrow from leaving container when total reaches 100%
    if (progressValue >= 100) {
      progress.current.style.borderTopRightRadius = `8px`;
      arrow.current.style.left = `95%`;
    }
  }

  return (
    <>
      <div className="tracker">
        <div ref={arrow} className="tracker-arrow"></div>
        {toggleDonationTracker()}
      </div>
      <article>
        <div className="progress-container">
          <div ref={progress} className="progress-bar"></div>
        </div>
        <h1>Only four days left to fund this project</h1>
        <p>
          Join the <span className="donors">{donors}</span> other donors who
          have already supported the project.
        </p>
        <form onSubmit={handleSubmit} className="form-container">
          <label htmlFor="donation" className="sr-only">
            Donation Amount
          </label>
          <div className="input-container">
            <span className="dollar">$</span>
            <input
              ref={input}
              id="donation"
              onChange={handleChange}
              type="number"
              min="5"
              placeholder="25"
            />
          </div>
          <button>Give Now</button>
        </form>
      </article>
    </>
  );
}