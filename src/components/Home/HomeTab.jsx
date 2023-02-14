import React, { useState } from "react";
import "../Styles/Home.css";
import SikkaLogo from '../../assets/sikkaLogo.png'
import  Image1 from '../../assets/Facebook.png'
import  Image2 from '../../assets/google-plus.png'
import  Image3 from '../../assets/Twitter.png'
import  Image4 from '../../assets/social_yelp.png'
import  Image5 from '../../assets/lock.jpg'
import  Image6 from '../../assets/Web.png'
import { FaCommentsDollar } from "react-icons/fa";
import { ImLink } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import HomeStarRating from "./HomeStarRating";
import TimeLine from "./TimeLine";
import ModalsPopup from "../Feedback/ModalsPopup";
import HomeModel from "./ModalPages/HomeModel";
import UpdateModal from "./ModalPages/UpdateModal";




function HomeTab(props) {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [toggled, setToggled] = useState(false);
  // const [showed, setShowed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShow(false);
  // const handleCloseForReferFriend = () => setShowed(false);
  const handleCloseForUpdateModal = () => setShowModal(false);
  const handleShow = (breakpoint) => 
  {
    setShow(true);
    setToggled(!toggled);
    setFullscreen(breakpoint);

  }
  // const Referfiend = (breakpoint) => 
  // {
  //   console.log("mahesh Chouhan")
  //   setShowed(true);
  //   setFullscreen(breakpoint);

  // }
  const UpdateProfileModal = (breakpoint) => 
  {
    console.log("mahesh Chouhan")
    setShowModal(true);
    setFullscreen(breakpoint);

  }

 
  
  return (
    <div>
 
    <div className="container-fluid sectionHome">
      <div className="row">
         <div className="col-md-4 data-table1">
            <div className="profileUpdate">

            <img
              className="imgProfile"
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png" width="130px"
              alt=""
              />
              <div className="header"><h6>Welcome</h6></div>
              <div><h4>Kiran O'Darekar</h4></div>
               <p>Ap #265-2335 Mauris Rd.<br /> Lima,  Ontario, 36252</p>
               <div className="contact" ><p><IoMdContact size={29} style={{marginTop:"-3px",marginRight:"4px", }} />975-793-0276</p><span></span></div>
               <div className="email"><p><MdEmail size={29} style={{marginRight:"4px",marginTop:"-3px" }} /><a href="#">kiran.darekar@gmail.com</a></p></div>
               <div className="visit" ><p><b>First Visit</b>:- 15/12/2021</p><span></span></div>
               <div  style={{marginTop:"-15px"}} className="visit" ><p><b>Last Visit</b>:-12/12/2022</p><span></span></div>
                <div><button className="btn btn-primary update_button" onClick={UpdateProfileModal} >Update Profile</button></div>
          
              </div>



          </div>
          <div className="col-md-5 data-table2">
          <div  className="Section2Head">

<img
style={{ marginTop:"80px" }}
  className="imgProfile"
  src={SikkaLogo}
  alt=""
  />
  <div className="header2"><h5>You're A Patient Of</h5>

   <h6> Demo Smile dental care</h6><br />
   
   <span onClick={handleShow} ><FaCommentsDollar size={22} /> Fill out a Feedback Survey</span></div>
   <div className="email"><p><ImLink size={20} />Connect with us on Social Media</p></div>
   <div className="visit" >
    <span className="Section2Image">
   <a href="https://www.facebook.com/SikkaSoftware">
   <img src={Image1} Style="margin-left:13px; width: 30px;" alt="" />
   </a>
   <a href="https://www.facebook.com/SikkaSoftware">
   <img src={Image2} Style="margin-left:13px; width: 30px;" alt="" />
   </a>
   <a href="https://www.facebook.com/SikkaSoftware">
   <img src={Image3} Style="margin-left:13px; width: 30px;" alt="" />
   </a>
   <a href="https://www.facebook.com/SikkaSoftware">
   <img src={Image4} Style="margin-left:13px; width: 30px;" alt="" />
   </a>
   <a href="https://www.facebook.com/SikkaSoftware">
   <img src={Image5} Style="margin-left:13px; width: 30px;" alt="" />
   </a>
   <a href="https://www.facebook.com/SikkaSoftware">
   <img src={Image6} Style="margin-left:13px; width: 30px;" alt="" />
   </a>
   <br />
   <br />
   </span>
   </div>
   <HomeStarRating />

    <div>
      <button className="btn   Sectionbutton" style={{float:"center"}} onClick={handleShow} >Refer a friend</button>
      <button className="btn   Sectionbutton" style={{float:"center"}} >Send Message</button>
    </div>
    
        </div>
       
          </div>
          <div className="col-md-3 data-table3">
           
          <h4  className="practice-activity">Activity Stream</h4>
          <TimeLine />
          </div>
      
      </div>
    </div>
    <ModalsPopup handleClose={handleClose} show={show} handleShow={handleShow} toggled={toggled} fullscreen={fullscreen} />
  
    {/* <div>
    <HomeModel handleCloseForReferFriend={handleCloseForReferFriend} showed={showed} Referfiend={Referfiend} fullscreen={fullscreen} />
    </div> */}
    <div>
    <UpdateModal handleCloseForUpdateModal={handleCloseForUpdateModal} showModal={showModal} UpdateProfileModal={UpdateProfileModal} fullscreen={fullscreen} />
    </div>
    </div>
  );
}

export default HomeTab;
