import React from 'react'
import { CgProfile } from 'react-icons/cg'
import '../../Styles/Profile.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProfilePhoto from './ProfilePhoto';
// import ReferalsByYou from './ReferalsByYou';
import ProfileReferal from './ProfileReferal';
function UpdateProfile() {
  return (
    <div>
      <div className=''>
     
<Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="profile" title="profile">
      <ProfilePhoto />
      </Tab>
      <Tab eventKey="ProfileReferal" title="Referrals by you">
     <ProfileReferal />
      </Tab>
    
    </Tabs>
      </div>
    </div>
  )
}

export default UpdateProfile
