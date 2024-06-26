import React, { useState } from "react"
import useLocalStorage from "use-local-storage"

const MailchimpForm = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [cleanPopUp, setCleanPopUp] = useLocalStorage("PopUpOff", true)

  const handleCheckboxChange = event => {
    setIsChecked(event.target.checked)
  }

  const removeCard = () => {
    setCleanPopUp(!cleanPopUp)
  }

  return (
    <div id="mc_embed_shell">
      <div id="mc_embed_signup">
        <form
          action="https://knickerbockerlaundromat.us10.list-manage.com/subscribe/post?u=20441683fc9a837201832f86c&amp;id=0ec9b38f23&amp;f_id=002d5be5f0"
          method="post"
          className="validate"
          style={{ margin: 0 }}
          onSubmit={removeCard}
        >
          <div id="mc_embed_signup_scroll">
            <div
              className="mc-field-group"
              style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}
            >
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
                placeholder="Enter your email below to get your discount code"
                style={{
                  width: "100%",
                  padding: "14px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "15px",
                  margin: 0,
                }}
              />
            </div>
            <div
              className="mc-field-group"
              style={{
                width: "100%",
                maxWidth: "500px",
                margin: "0 auto",
                paddingTop: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type="checkbox"
                id="mce-agree"
                name="AGREE"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label
                htmlFor="mce-agree"
                style={{ marginLeft: "10px", fontSize: "15px" }}
              >
                I agree to receive marketing emails and promotional offers
              </label>
            </div>
            <div
              id="mce-responses"
              style={{
                clear: "both",
                width: "100%",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
            <div
              aria-hidden="true"
              style={{ position: "absolute", left: "-5000px" }}
            >
              <input
                type="text"
                name="b_20441683fc9a837201832f86c_0ec9b38f23"
                tabIndex="-1"
                value=""
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                width: "100%",
                maxWidth: "500px",
                margin: "0 auto",
                paddingTop: "10px",
              }}
            >
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                value="Subscribe"
                disabled={!isChecked}
                style={{
                  background: isChecked ? "#0047AB" : "#cccccc",
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "24px",
                  borderRadius: "6px",
                  textAlign: "center",
                  border: "none",
                  cursor: isChecked ? "pointer" : "not-allowed",
                  width: "100%",
                  padding: "14px",
                  display: "block",
                  margin: 0,
                }}
              />
            </div>
          </div>
        </form>
      </div>
      <script
        type="text/javascript"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
      ></script>
      <script type="text/javascript">
        {`
          (function($) {
            window.fnames = new Array();
            window.ftypes = new Array();
            fnames[0] = 'EMAIL';
            ftypes[0] = 'email';
            fnames[1] = 'FNAME';
            ftypes[1] = 'text';
            fnames[2] = 'LNAME';
            ftypes[2] = 'text';
            fnames[3] = 'ADDRESS';
            ftypes[3] = 'address';
            fnames[4] = 'PHONE';
            ftypes[4] = 'phone';
            fnames[5] = 'BIRTHDAY';
            ftypes[5] = 'birthday';
          })(jQuery);
          var $mcj = jQuery.noConflict(true);
        `}
      </script>
    </div>
  )
}

export default MailchimpForm
