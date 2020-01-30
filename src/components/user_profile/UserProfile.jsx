import React, { useState } from 'react'
import {useAuth0} from '../../contexts/auth0-context'

import UserInfo from './UserInfo'
import UserEvents from './UserEvents'
import EditUserForm from './EditUserForm'
import GearIcon from '../icons/GearIcon'

//graphql
import {useLazyQuery, useApolloClient} from '@apollo/react-hooks'
import {
  GET_USER_ATTENDING,
  GET_USER_CREATED,
  GET_USER_SAVED
} from '../../graphql'

import {
  userProfile,
  profileInfo,
  profileSmall,
  gearWrapper,
  hideText
} from './UserProfile.module.scss'

const UserProfile = () => {

  const [isEditing, setIsEditing] = useState(false);

  // Auth0 User info
  const { user } = useAuth0();
  
  
  // manages local form state
  const fullName = {
    first: "Cici",
    last: "Adams"
  }
  const [editName, setEditName] = useState(fullName);
  const handleFormChange = event => {
    const updatedValue = {
      ...editName,
      [event.currentTarget.name]: event.currentTarget.value
    };
    console.log("updatedValue in EditUSerForm.jsx:", updatedValue);
    setEditName(updatedValue);
  }
  
  const {data: attendingData, loading: attendingLoading, error: attendingError, refetch: attendingRefetch} = useLazyQuery(GET_USER_ATTENDING)


  return (
    <div className={userProfile}>
      <div className={profileInfo}>
        <div className={gearWrapper} onClick={() => setIsEditing(!isEditing)}>
          <GearIcon isActive={isEditing} />
          {isEditing && <small className={`${profileSmall} ${hideText}`}>save changes</small>}
        </div>
        {isEditing ? <EditUserForm editName={editName} handleFormChange={handleFormChange} /> : <UserInfo />}
      </div>
      <UserEvents />
    </div>
  )
}

export default UserProfile