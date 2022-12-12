import React from "react";
import { useState } from "react";

export default function Footer() {
  const [email, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The email you entered was: ${email}`);
  };

  return (
    <footer>
      <div id="foot">
        <div className="hand">
          <div className="finger">My blog</div>
          <div className="subtitle">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed
          </div>
          <div className="end">© 2022 blog, Inc.</div>
        </div>
        <div className="drx">
          <div className="deft">MEMU</div>
          <div className="beryl">
            About us <br />
            Contacts
            <br />
            Tems &amp; Condition
            <br />
            Privacy Policy
            <br />
          </div>
        </div>
        <div className="geng">
          <div className="chovy">FOLLOW US</div>
          <div className="ruler">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Facebook
              <br />{" "}
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              {" "}
              Twitter
              <br />{" "}
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Instargram
              <br />{" "}
            </a>
            <a href="index.html" target="_blank">
              {" "}
              Rss <br />{" "}
            </a>
          </div>
        </div>
        <div className="t1">
          <div className="faker">NEW SLETTER</div>
          <div className="keria">Suspendisse handrerit tellus</div>

          <div className="letter">
            <form>
              <input
                type="text"
                value={email}
                onChange={(e) => setName(e.target.value)}
                placeholder="Search for..."
              />
              <div className="lastline" />
              <button
                type="button"
                className="bts"
                onClick={handleSubmit}
                style={{ cursor: "pointer" }}
              >
                <img src="img/kakao.png" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
