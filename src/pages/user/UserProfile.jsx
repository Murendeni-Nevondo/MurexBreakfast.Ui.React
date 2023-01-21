import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getUser } from "../../services/userService";
import './UserProfile.css';

const UserProfile = () => {
    const [user, setUser] = useState({});
    const {id: userId} = useParams();

    useEffect(() => {
        const retriveUser = async() => {
            const { data } = await getUser(userId);
            console.log(data);
            setUser(data);
        }

        retriveUser();
    },[userId])
    console.log(user)
    return (
        <div className="user-profile">
            
            <div className="user-profile-left">
                <div className="profile-user-details">
                    <h2 className="user-name">{user.firstName} {user.lastName}</h2>
                    <div className="profile-image">
                        <img alt="profile" src="https://media-exp1.licdn.com/dms/image/C5603AQF5Rj72R8jEAA/profile-displayphoto-shrink_800_800/0/1657792543706?e=2147483647&v=beta&t=lzXnzz5ccsVn3ui8go_WyZzdw2CR_TiqPKCBCZP9__8" />
                    </div>

                    <div className="user-profile-texts">
                        <p className="text-one">Age</p>
                        <span className="text-two">{user.userProfile?.age}</span>
                    </div>
                    <div className="user-profile-texts">
                        <p className="text-one">Education</p>
                        <span className="text-two">{user.userProfile?.highestQualification}</span>
                    </div>
                    <div className="user-profile-texts">
                        <p className="text-one">Status</p>
                        <span className="text-two">Married</span>
                    </div>
                    <div className="user-profile-texts">
                        <p className="text-one">Position</p>
                        <span className="text-two">{user.userProfile?.position}</span>
                    </div>
                    <div className="user-profile-texts">
                        <p className="text-one">Company</p>
                        <span className="text-two">{user.userProfile?.company}</span>
                    </div>
                </div>

                <div className="profile-user-quote">
                    <p><span className="quote">&#8220;</span>{user.userProfile?.quote}</p>
                </div>

                <div className="profile-user-personality">
                    <h3>Personality</h3>
                    <div className="personality-tags">
                        {user && user.userProfile?.personalities.map((p,i) => (<div key={i} className="personality-tag">{p}</div>))}
                    </div>
                </div>

                <div className="profile-user-roles">
                    <h3>Your Roles</h3>
                    <div className="personality-tags">
                        {user && user?.roles?.map((r,i) => (<div style={{color:'red', borderRadius:'3px'}} key={i} className="personality-tag">{r}</div>))}
                    </div>
                </div>

            </div>

            <div className="user-profile-right">
                <div className="profile-right-container-bio">
                    <h3>Bio</h3>
                    <p>{user.userProfile?.bio}</p>
                </div>

                <div className="profile-right-container">
                    <h3>Core needs (Reasons they use the website)</h3>
                    <p><span className="dot">&#8226;</span>Need to organize Special Collections Documentation</p>
                    <p><span className="dot">&#8226;</span>Uses website to find contact information for the pbrary</p>
                    <p><span className="dot">&#8226;</span>Find historical documents relating to the pbrary throug the website</p>
                </div>

                <div className="profile-right-container">
                    <h3>Frustrations (needs, goals, and pain points)</h3>
                    <p><span className="dot">&#8226;</span>Need to organize Special Collections Documentation</p>
                    <p><span className="dot">&#8226;</span>Uses website to find contact information for the pbrary</p>
                    <p><span className="dot">&#8226;</span>Find historical documents relating to the pbrary throug the website</p>
                </div>

                <div className="profile-bottom-container">
                    <Link to={`/user/${userId}/profile/update`}><button className="profile-update-button">Update</button></Link>
                    <Link to={`/user/${userId}/profile/update`}><button className="view-breakfasts-button">View breakfasts</button></Link>
                    { user?.roles?.filter(r => r === "admin").length > 0 && <Link to={`/user/${userId}/profile/update`}><button className="profile-manage-users-button">Manage Users</button></Link>}
                </div>

            </div>
        </div>
    )
}

export default UserProfile;