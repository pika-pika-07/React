const Contact = () => {
  return (
    <div className="font-bold text-3xl p-4 m-4">
      <h2>Contact us</h2>
      <form>
        <input
          type="text"
          placeholder="message"
          className="border border-black p-2 m-2"
        ></input>
        <input
          type="text"
          placeholder="name"
          className="border border-black p-2 m-2"
        ></input>
        <button className=" border border-black p-2 m-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
