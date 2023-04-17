import React, { useState, useEffect } from "react";
import "./index.css";
import api from "../../../src/config/api";



interface Profile {
    id: string;
    name: string;
    age: number;
    bio: string;
  }
  // export const ProfilePage = ({ profile }: { profile: Profile }) => {
    // const { name, age, bio } = profile;
    export const ProfilePage = () => {
    const [profile, setProfile] = useState<Profile[]>([]);

    useEffect(() => {
      const fetchProfile = async () => {
        const response = await api.get("/user");
        setProfile(response.data);
      };
      fetchProfile();
    }, []);
    return (
        
      <div>
        <p>Profile Page</p>
        {profile.map((profile) => (
        <div key={profile.id} className="pro">
        <h1>{profile.name}</h1>
        <p>{profile.age} anos</p>
        <p>{profile.bio}</p>
        </div>
        ))}
      </div>
    );
  };