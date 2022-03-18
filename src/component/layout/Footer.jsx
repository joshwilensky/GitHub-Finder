import { useState } from "react";
import moment from 'moment'

const footerYear = new Date().getFullYear();
const date = moment().format("LL");

function Footer() {
  let curTime = new Date().toLocaleTimeString();
  const [cTime, setCtime] = useState(curTime);
  const UpdateTime = () => {
    curTime = new Date().toLocaleTimeString();
    setCtime(curTime);
  };
  setInterval(UpdateTime, 1000);

  return (
    <footer className="footer p-5 bg-gray-700 text-primary-content footer-center">
      <div>
        <p>Copyright &copy; {footerYear} All rights reserved</p>
        <p>{date}</p>
        <p>{cTime}</p>
      </div>
    </footer>
  );
}

export default Footer;
