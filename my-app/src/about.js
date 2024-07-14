
function About() {

    return (
      <div>
      <div className="p-4 text-center text-white bg-pink-200 about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>
    
      <h2 className="text-center">Our Team</h2>
      <div className="flex flex-wrap justify-center p-20 row">
        <div className="flex flex-col items-center w-1/4 p-4 mb-4 column">
          <div className="flex flex-col items-center ml-16 shadow-lg card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0WgHrKtwDytvvez7h42gnFuo9P11YS9N7CQD9t0eoDwJQzyDrRNmg4KfRAO_A5Q-ffs&usqp=CAU" alt="Jane" className="w-full"/>
            <div className="container flex flex-col items-center p-4">
              <h2>Jane Doe</h2>
              <p className="text-pink-200 title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p><button className="w-full p-2 text-white bg-purple-800 button">Contact</button></p>
            </div>
          </div>
        </div>
    
        <div className="flex flex-col items-center w-1/4 p-4 mb-4 column">
          <div className="flex flex-col items-center ml-16 shadow-lg card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0WgHrKtwDytvvez7h42gnFuo9P11YS9N7CQD9t0eoDwJQzyDrRNmg4KfRAO_A5Q-ffs&usqp=CAU" alt="Mike" className="w-full"/>
            <div className="container flex flex-col items-center p-4">
              <h2>Mike Ross</h2>
              <p className="text-pink-200 title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p><button className="w-full p-2 text-white bg-purple-800 button">Contact</button></p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center w-1/4 p-4 mb-4 column">
          <div className="flex flex-col items-center ml-16 shadow-lg card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0WgHrKtwDytvvez7h42gnFuo9P11YS9N7CQD9t0eoDwJQzyDrRNmg4KfRAO_A5Q-ffs&usqp=CAU" alt="John" className="w-full"/>
            <div className="container flex flex-col items-center p-4">
              <h2>John Doe</h2>
              <p className="text-pink-200 title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p><button className="w-full p-2 text-white bg-purple-800 button">Contact</button></p>
            </div>
          </div>
        </div>
    
        <div className="flex flex-col items-center w-1/4 p-4 mb-4 column">
          <div className="flex flex-col items-center ml-16 shadow-lg card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0WgHrKtwDytvvez7h42gnFuo9P11YS9N7CQD9t0eoDwJQzyDrRNmg4KfRAO_A5Q-ffs&usqp=CAU" alt="Jane" className="w-full"/>
            <div className="container flex flex-col items-center p-4">
              <h2>Jane Doe</h2>
              <p className="text-pink-200 title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p><button className="w-full p-2 text-white bg-purple-800 button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    );
}

  export default About;