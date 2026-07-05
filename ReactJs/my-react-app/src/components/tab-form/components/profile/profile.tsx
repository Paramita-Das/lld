import './profile.css'

const Profile = ({data, setData}) => {
    const {name, age, email} = data;

    const handleDataChange = (e, item) => {
        setData((prev) => ({ ...prev, [item]: e.target.value }));
    }
    return (
        <div>
            <h2>Profile</h2>
            <div className="profile-form">
                <div className="profile-input"><label>Name:</label><input type="text" placeholder="Enter your name" value={name} onChange={(e) => handleDataChange(e, 'name')}/></div>
                <div className="profile-input"><label>Age:</label><input type="number" placeholder="Enter your age" value={age} onChange={(e) => handleDataChange(e, 'age')}/></div>
                <div className="profile-input"><label>Email:</label><input type="email" placeholder="Enter your email" value={email} onChange={(e) => handleDataChange(e, 'email')}/></div>
            </div>
            <button type="submit">Save Changes</button>
        </div>
    );
}

export default Profile;