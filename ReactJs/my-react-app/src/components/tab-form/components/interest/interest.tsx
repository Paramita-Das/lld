const Interest = ({ data, setData }) => {
  const handleDataChange = (e, item) => {
    const { value } = e.target;
    setData((prev) => ({ ...prev, [item]: value.split(", ") }));
  };
  return (
    <div>
      <h2>Interest Tab</h2>
      <div>
        <label>Coding</label>
            <input
            type="checkbox"
            checked={data.interest.includes("coding")}
            name="coding"
            // onChange={(e) => handleDataChange(e, "interest")}
            />
        <label>Music</label>        
            <input
            type="checkbox"
            checked={data.interest.includes("music")}
            name="music"
            // onChange={(e) => handleDataChange(e, "interest")}
            />
        <label>Sports</label>
            <input
            type="checkbox"
            checked={data.interest.includes("sports")}
            name="sports"
            // onChange={(e) => handleDataChange(e, "interest")}
            />
    </div>
    </div>
  );
};

export default Interest;
