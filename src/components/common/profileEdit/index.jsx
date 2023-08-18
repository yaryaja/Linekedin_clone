
import React, { useState } from 'react'
import { EditProfile } from "../../../api/FirestoreAPI"
import "./index.scss"

function ProfileEdit({ onEdit, curruser }) {
    const [editInputs, setEditInputs] = useState(curruser);
    const getInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let input = { [name]: value };
        setEditInputs({ ...editInputs, ...input });

    }
    // console.log(editInputs)
    console.log(curruser.user_id)
    const updateProfile = () => {
        EditProfile(curruser?.user_id, editInputs)
        onEdit();
    }


    return (
        <div className="Card-container">

            <div className='Card'>
                <div className='buttons'>


                    <button className='Edit-btn-go' onClick={onEdit}>Go Back</button>
                </div>
                <div className='profile-edit-input'>
                    <label className='label_Na'>Name*</label>
                    <input onChange={getInput} className='auth-common-inputs'  name='Name' 
                    value={editInputs.Name}
                    />
                      <label className='label_He'>Headline*</label>
                    <input onChange={getInput} className='auth-common-inputs' placeholder='Headline' name='Headline'
                     value={editInputs.Headline}
                    />
                      <label className='label_Lo'>Location*</label>
                    <input onChange={getInput} className='auth-common-inputs' placeholder='Location' name='Location'
                     value={editInputs.Location} />
                       <label className='label_Co'>Company*</label>
                    <input onChange={getInput} className='auth-common-inputs' placeholder='Company' name='Company' 
                     value={editInputs.Company}/>
                       <label className='label_Co'>College*</label>
                    <input onChange={getInput} className='auth-common-inputs' placeholder='College' name='College' 
                     value={editInputs.College}/>
                     <label className='label_We'>Website</label>
                    <input onChange={getInput} className='auth-common-inputs' placeholder='Website' name='website' 
                     value={editInputs.College}/>
                     {/* <label className='About'>Website</label> */}
                    <textarea
                    placeholder='About Me'
                    className='auth-common-text'
                    onChange={getInput}
                    rows={5}
                    name='AboutMe'
                    value={editInputs.AboutMe}
                    />
                  <label className='Skills'>Add Skills</label>
                    <textarea
                    placeholder='Skills'
                    className='auth-common-text'
                    onChange={getInput}
                    rows={2}
                    name='Skills'
                    value={editInputs.Skills}
                    />
                </div>
                <div className='buttons'>


                    <button className='Edit-btn' onClick={updateProfile}>save</button>
                </div>
            </div>


        </div>
    )
}

export default ProfileEdit

