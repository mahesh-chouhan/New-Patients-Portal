import React, { useEffect, useState } from "react";
import data from "./MockData.json";
import "../Styles/Feedback.css";
import { FaCommentsDollar } from "react-icons/fa";
function FeedbackSurvey() {
  const [textColor, setTextColor] = useState(
    data.questions.map((item)=>{
    return {color:"black"}
  }));
  const [isBlack, setIsBlack] = useState(true);
  const [selected, setSelected] = useState({});
  const [checked, setChecked] = useState([]);
  const [color, setColor] = useState();

 useEffect (()=>{
  let SomeArray=[];
  for(let i=0;i<data.questions.length;i++){
      SomeArray=[...SomeArray,{checked:false,Questions:data.questions[i].question,SelectedAnswers:"",RealAnswers:"",options:[]}];
  }
  
  let selectedOption=SomeArray.map((item,itemIndex)=>{
      return {
          selectedQeustions:item.Questions,
          SelectedAnsers:"",
          index:itemIndex
      }

  })
  setChecked(selectedOption);
  
 },[])
console.log(checked);
  // let mahesh= [];
  // let empty = 0;
  // const handleChange = event => {
  //   const data = {selected};
  //    mahesh = event.target.value
  //   console.log(mahesh);
  //   console.log(data);
  //   setSelected(event.target.value);
  // };

let answer = data.questions.map((item)=>{
  return item.answer
})
console.log(answer)

  const handleChnageTextColor = () => {
       checked?.map((item,itemIndex)=>{
          if(item.SelectedAnsers){
            let textColorClone=[...textColor];
            textColorClone[itemIndex].color="black"
            setTextColor(textColorClone)
          }else{
            let textColorClone=[...textColor];
            textColorClone[itemIndex].color="red"
            setTextColor(textColorClone)
          }
       })
    
  };

  const ResetClick = () => {
    setColor(" ");
  };
  console.log(checked)
  return (
    <div>
      <div className="container FeedbackSurvay">
        <div>
          <h4>
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
              <span style={{ color: textColor[id].color }}> {questions.question}</span>

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
                        required
                        class="form-check-input"
                        type="radio"
                        name={`${id}`}
                        value={option}
                        onChange={()=>{
                          let optionClone=[...checked];
                          optionClone[id].SelectedAnsers=option
                          setChecked(optionClone)
                        }}
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
          <span>
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
            
              <b>
                Note : This feedback will be directly sent to your provider.
              </b>
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
