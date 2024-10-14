const MessageForm = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <img src="" alt="" />
        </div>
        <div className="">
          <h2>Message Us</h2>
          <span>Get in Touch with us✨</span>
          <form action="">
            <div className="">
              <label htmlFor="email"></label>
              <input type="email" id="email" />
            </div>

            <div className="">
              <label htmlFor="Name"></label>
              <input type="text" id="Name" />
            </div>

            <textarea
              name="Message"
              id=""
              placeholder=" Your Message"
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
