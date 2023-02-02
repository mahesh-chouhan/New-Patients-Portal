import React, { useState } from "react";
import data from "./MockData.json";
import "../Styles/Feedback.css";
import { FaCommentsDollar } from "react-icons/fa";
function FeedbackSurvey() {
  const [textColor, setTextColor] = useState("black");
  const [isBlack, setIsBlack] = useState(true);
  const [selected, setSelected] = useState();
  const [color, setColor] = useState();
  let mahesh= [];
  const handleChange = event => {
    const data = {selected};
     mahesh = event.target.value
    console.log(mahesh);
   
    setSelected(event.target.value);
  };




  const handleChnageTextColor = (id) => {
    if (selected.length >= 0) {
      setIsBlack(!isBlack);
      setTextColor("red" );
    } else {
      setTextColor("black");
    }
  };

  const ResetClick = () => {
    setColor(" ");
  };
  return (
    <div>
      <div className="container FeedbackSurvay">
        <div>
          <h4 style={{ color: textColor }}>
            <FaCommentsDollar
              size={40}
              style={{ marginRight: "5px", marginTop: "-5px" }}
            />
            Feedback
          </h4>
        </div>
        <hr />
        {data.questions.map((questions, id) => {
          return (
            <>
            <form>
              
            <div className="container SurvayQuestion" key={id}>
              <span style={{ color: textColor }}> {questions.question}</span>

              {questions.options.map((option, i) => {
                return (
                  <div class="form-check" key={i}>
                    <label
                      style={{
                        marginRight: "9px",
                        marginTop: "10px",
                      }}
                      required
                      >
                      <input
                        key={id}
                        required={true}
                        
                        class="form-check-input"
                        type="radio"
                        
                        name={`${id}`}
                        
                        value={option}
                        onChange={handleChange}
                        />
                      {option}
                    </label>
                  </div>
                        );
                      })}
                      </div>
                      </form>
                      </>

          );
        })}
        <div className="SurvayQuestion">
          <span style={{ color: textColor }}>
            Tell us about your experience with our office. Please add your name,
            and your response may be posted on google. Thank you.
          </span>
          <div class="mt-3">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
            <p class="mt-1" style={{ fontSize: "14px" }}>
              {" "}
              <b>
                Note : This feedback will be directly sent to your provider.
              </b>{" "}
            </p>
          </div>
        </div>
        <div className="container" style={{ marginTop: "10px" }}>
          <button
            type="button"
            className="btn btn btn-save"
            onClick={handleChnageTextColor}
          >
            save
          </button>
          <button type="reset" className="btn  btn-reset" onClick={ResetClick}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackSurvey;
