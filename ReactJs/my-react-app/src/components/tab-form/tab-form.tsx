import { useState } from "react";
import Profile from "./components/profile/profile";
import Interest from "./components/interest/interest";
import Settings from "./components/settings/settings";
import "./tab-form.css";

const TabForm= () => {
    const [tab, setTab] = useState<'profile' | 'interest' | 'settings'>('profile');
    const [data, setData] = useState({ 
        name: '',
        age: 0,
        email: '' ,
        interest: ["coding", "music", "sports"],
        settings: { theme: 'light', notifications: true }
    });
    return (
        <div className="tabs">
            <h2>Tabs Component</h2>
            <div className="tab-buttons">
                <button onClick={() => setTab('profile')}>Profile</button>
                <button onClick={() => setTab('interest')}>Interest</button>
                <button onClick={() => setTab('settings')}>Settings</button>
            </div>
            <div>
                {tab === 'profile' && <Profile data={data} setData={setData} />}
                {tab === 'interest' && <Interest data={data} setData={setData} />}
                {tab === 'settings' && <Settings data={data} setData={setData} />}
            </div>
        </div>
    );
}

export default TabForm;