import React, { useState } from 'react';
import "./index.css"
function Second() {
  const [profiles, setProfiles] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [isActive, setIsActive] = useState(false); 
  const addProfile = () => {
    if (!firstName || !lastName || !age || !email) {
      alert("Hamma maydonlarni toldir");
      return;
    }
    const newProfile = {
      id: Date.now(), 
      firstName,
      lastName,
      age: parseInt(age),  
      email,
      isActive
    };
    setProfiles([...profiles, newProfile]);
    setFirstName('');
    setLastName('');
    setAge('');
    setEmail('');
    setIsActive(false);
  };
  const deleteProfile = (id) => {
    setProfiles(profiles.filter(profile => profile.id !== id));
  };
  const toggleActiveStatus = (id) => {
    setProfiles(profiles.map(profile => {
      if (profile.id === id) {
        return { ...profile, isActive: !profile.isActive };
      }
      return profile;
    }));
  };

  return (
    <div>
        <h2 className='second-title'>Ikkinchi topshiriq</h2>
      <div className='form'>
        <input
          type="text"
          placeholder="Ism"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="familya"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Yosh"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={isActive}
            onChange={() => setIsActive(!isActive)}
          />
        </label>
        <button className='btn' onClick={addProfile}>Profil Qoshish</button>
      </div>
      <div>
        <h3 className='profiles'>User Profiles</h3>
        <ul>
          {profiles.map((profile) => (
            <li key={profile.id}>
              <h4>{profile.firstName} {profile.lastName}</h4>
              <p>Age: {profile.age}</p>
              <p>Email: {profile.email}</p>
              <p>Status: {profile.isActive ? "Active" : "Inactive"}</p>
              <button onClick={() => toggleActiveStatus(profile.id)}>
               Active/Inactive
              </button>
              <button onClick={() => deleteProfile(profile.id)}>
                Delete Profile
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Second;
