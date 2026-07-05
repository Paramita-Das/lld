import './accordion.css'

const Accordion = ({ item, isDropdownOpen, onToggle, isChecked, onCheckItem}) => {
  return (
    <div>
      <div><input type="checkbox" value={isChecked} onChange={onCheckItem}/><span className="item" onClick={onToggle}>{item.title} <span>{isDropdownOpen ? "🔼" : "🔽"}</span></span></div>
      {isDropdownOpen && <p style={{border: '1px solid #000000' }}>{item.content}</p>}
    </div>
  );
};

export default Accordion;
