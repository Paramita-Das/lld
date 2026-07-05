const Settings = ({data, setData}) => {

    const handleChange = (e, item) => {
        const { value, checked } = e.target;
        setData((prev) => ({ ...prev, settings: { ...prev.settings, [item]: item === 'theme' ? value : checked } }));
    }
    return (
        <div>
            <h2>Settings Tab</h2>
            <div>
                <label>Theme:</label>
                <input type="radio" checked={data.settings.theme === 'light'} onChange={(e) => handleChange(e, 'theme')} value="light" /> Light
                <input type="radio" checked={data.settings.theme === 'dark'} onChange={(e) => handleChange(e, 'theme')} value="dark" /> Dark
            </div>
            <div>
                <label>Notifications:</label>
                <input
                    type="checkbox"
                    checked={data.settings.notifications}
                    onChange={(e) => handleChange(e, 'notifications')}
                />
            </div>
        </div>
    );
}

export default Settings;