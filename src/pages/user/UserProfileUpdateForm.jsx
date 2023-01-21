import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { updateUser } from "../../redux/apiCalls";
import { getUser , updateUserProfile } from "../../services/userService";
import { getUserSuccess } from "../../redux/userSlice";
import './UserProfileUpdateForm.css';

const UserProfileUpdateForm = () => {
    const [user, setUser] = useState({});
    const [age, setAge] = useState(0);
    const [highestQualification, setHighestQualification] = useState('');
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [bio, setBio] = useState('');
    const [quote, setQuote] = useState('');
    const [personalities, setPersonalities] = useState([]);
    const navigate = useNavigate();

    const {id: userId} = useParams();
    const userProfle = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const retriveUser = async() => {
            const { data } = await getUser(userId);
            setUser(data);
            setAge(data.userProfile?.age)
            setHighestQualification(data.userProfile?.highestQualification)
            setCompany(data.userProfile?.company)
            setPosition(data.userProfile?.position)
            setBio(data.userProfile?.bio)
            setQuote(data.userProfile?.quote)
            dispatch(getUserSuccess(data.userProfile))
        }
        
        retriveUser();
    },[userId, dispatch])
    
    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        //dispatch(updateSuccess({name:company,email:position}));
        const data = {userId, age, quote, bio, company, position,highestQualification,personalities: personalities};
        updateUser(data,dispatch,userId);
        toast("Profile updated successfully")
    }

    const HandleSelectPersonalities = (e) => {
        setPersonalities([...personalities,e.target.value])
        console.log(personalities);
    }
    console.log(userProfle.userInfo)
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
                        <span className="text-two">{userProfle?.userInfo?.age}</span>
                    </div>
                    <div className="user-profile-texts">
                        <p className="text-one">Education</p>
                        <span className="text-two">{userProfle?.userInfo?.highestQualification}</span>
                    </div>
                    <div className="user-profile-texts">
                        <p className="text-one">Status</p>
                        <span className="text-two">Married</span>
                    </div>
                    <div className="user-profile-texts">
                        <p className="text-one">Position</p>
                        <span className="text-two">{userProfle?.userInfo?.position}</span>
                    </div>
                    <div className="user-profile-texts">
                        <p className="text-one">Company</p>
                        <span className="text-two">{userProfle?.userInfo?.company}</span>
                    </div>
                </div>

                <div className="profile-user-quote">
                    <p><span className="quote">&#8220;</span>{userProfle?.userInfo?.quote}</p>
                </div>

                <div className="profile-user-personality">
                    <h3>Personality</h3>
                    <div className="personality-tags">
                        {user && user.userProfile?.personalities.map((p,i) => (<div key={i} className="personality-tag">{p}</div>))}
                    </div>
                </div>

            </div>

            <div className="user-profile-right">
                <div className="profile-right-container-bio">
                    <div className="profile-update-form">
                        <h1>Update your profile</h1>
                        <form onSubmit={handleUpdateProfile}>
                            <div className="form-input-fields">
                                <div className="form-group">
                                    <label className="form-label">Education </label>
                                    <input className="form-input-filed" onChange={(e) => setHighestQualification(e.currentTarget.value)} value={highestQualification  || ""} name="education" placeholder="education" />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Company</label>
                                    <input className="form-input-filed" onChange={(e) => setCompany(e.currentTarget.value)} value={company  || ""} name="company" placeholder="company" />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Position</label>
                                    <input className="form-input-filed" onChange={(e) => setPosition(e.currentTarget.value)} value={position  || ""}  name="position" placeholder="position" />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Age</label>
                                    <input type="number" className="form-input-filed" onChange={(e) => setAge(e.currentTarget.value)} value={age  || ""} name="age" placeholder="age" />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Personalities</label>
                                    <select name="personalities" className="form-input-filed" onChange={(e) => HandleSelectPersonalities(e)}>
                                        <option>--Select--</option>
                                        <option value="Outgoing">Outgoing</option>
                                        <option value="Thinker">Thinker</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Biography</label>
                                    <textarea multiple rows="4" onChange={(e) => setBio(e.currentTarget.value)} value={bio  || ""} name="bio"  className="form-input-filed"></textarea>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Faviorite quote</label>
                                    <textarea rows="3" onChange={(e) => setQuote(e.currentTarget.value)} value={quote  || ""} name="quote"  className="form-input-filed"></textarea>
                                </div>

                            </div>
                            <button className="profile-update-button">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileUpdateForm;