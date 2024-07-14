

function Contact() {

    return (<div className="px-40 py-20 contact">
      <h1 className="mb-4 text-3xl font-bold text-center">Contact Form</h1>
    
      <div className="container bg-[#fef8f8] rounded-lg p-5">
        <form action="/action_page.php">
          <label htmlFor="fname" className="block mb-2">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." className="w-full p-3 mb-4 border border-gray-300 rounded" />
    
          <label htmlFor="lname" className="block mb-2">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." className="w-full p-3 mb-4 border border-gray-300 rounded" />
    
          <label htmlFor="country" className="block mb-2">Country</label>
          <select id="country" name="country" className="w-full p-3 mb-4 border border-gray-300 rounded">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
    
          <label htmlFor="subject" className="block mb-2">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." className="w-full p-3 mb-4 border border-gray-300 rounded h-52"></textarea>
    
          <input type="submit" value="Submit" className="w-full bg-[#6A515E] text-white p-3 rounded cursor-pointer hover:bg-[#D7BDCA]" />
        </form>
      </div>
    </div>
     );
}

  export default Contact;