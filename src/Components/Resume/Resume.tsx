import { useState } from "react";

const Resume = () => {
  const [enDisplayed, setEnDisplayed] = useState(true);
  const [ruDisplayed, setRuDisplayed] = useState(false);
  return (
    <div className="resume">
        <div className="buttons">
            {/* <button className={enDisplayed ? "btn_active" : "btn"} onClick={()=> {setEnDisplayed(true); setRuDisplayed(false)}}>EN</button> */}
            {/* <button className={ruDisplayed ? "btn_active" : "btn"} onClick={()=>{setRuDisplayed(true); setEnDisplayed(false)}}>RU</button> */}
        </div>
      {enDisplayed && <iframe
        src="https://docs.google.com/gview?url=https://github.com/just2102/portfolio/raw/main/Krasiuchenko_Resume.pdf&embedded=true"
        title="en"
      ></iframe>}
      {/* {ruDisplayed && <iframe
        src="https://docs.google.com/gview?url=https://github.com/just2102/portfolio/raw/main/RU_Krasiuchenko_Resume .pdf&embedded=true"
        title="ru"
      ></iframe>} */}
    </div>
  );
};

export default Resume;
