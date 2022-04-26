import React from 'react'
import '../assets/scss/ProfileImage.scss'

function ProfileImage() {
  return (
    <div className='profilephotobox'>
        <img src={require('../assets/img/Profile.jpg')}>

        </img>
    </div>
  )
}

export default ProfileImage