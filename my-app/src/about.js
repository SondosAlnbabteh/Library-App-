import "./about.css";
function About() {

    return (
   <div>
<div className="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 style={{ textAlign: 'center' }}>Our Team</h2>
<div className="row" >
  <div className="column">
    <div className="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0WgHrKtwDytvvez7h42gnFuo9P11YS9N7CQD9t0eoDwJQzyDrRNmg4KfRAO_A5Q-ffs&usqp=CAU" alt="Jane" style={{width:"100%"}}/>
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0WgHrKtwDytvvez7h42gnFuo9P11YS9N7CQD9t0eoDwJQzyDrRNmg4KfRAO_A5Q-ffs&usqp=CAU" alt="Mike" style={{width:"100%"}}/>
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0WgHrKtwDytvvez7h42gnFuo9P11YS9N7CQD9t0eoDwJQzyDrRNmg4KfRAO_A5Q-ffs&usqp=CAU" alt="John" style={{width:'100%'}}/>
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0WgHrKtwDytvvez7h42gnFuo9P11YS9N7CQD9t0eoDwJQzyDrRNmg4KfRAO_A5Q-ffs&usqp=CAU" alt="Jane" style={{width:"100%"}}/>
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
</div>
    );
}

  export default About;