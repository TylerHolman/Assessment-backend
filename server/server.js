const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); 

const ctrl = require(`./controller.js`)


app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

 
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortune = ["A beautiful, smart, and loving person will be coming into your life.",
					 "A friend is a present you give yourself.",
					 "A fresh start will put you on your way.",
           `All will go well with your new project.`,
           `Do not be intimidated by the eloquence of others.`,
           ` Do not pursue the taste of good food. `,
           `Do not hold on to possessions you no longer need.`,
           `Think lightly of yourself and deeply of the world.`,
           `Do not fear death.`,
           `Do not seek to possess either goods or fiefs for your old age.`
  ];

  //choose random compliment
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune =fortune[randomIndex];

  res.status(200).send(randomFortune);
  
});
app.get("/api/games", (req, res) => {
  const games = ["Elden Ring",
					 "Lost Ark",
				`Lost Ark and Elden Ring`,
  ];

  
  let randomIndex = Math.floor(Math.random() * games.length);
  let randomGames = games[randomIndex];

  res.status(200).send(randomGames);
  
});
app.get("/api/certs", (req, res) => {
  const certs = ["Comp TIA Sec+",
					 "CEH: Certified Ethical Hacker",
					 "CISM: Certified Information Security Manager",
           "CISSP: Certified Information Systems Security Professional"
  ];


  let randomIndex = Math.floor(Math.random() * certs.length);
  let randomCerts = certs[randomIndex];

  res.status(200).send(randomCerts);
  
});
app.get("/api/gym", (req, res) => {
  const workout = ["Chest Day!",
					 "Back Day!",
					 "Shoulders/Biceps/Triceps!",
           `Leg Day!`
  ];


  let randomIndex = Math.floor(Math.random() * workout.length);
  let randomWorkout = workout[randomIndex];

  res.status(200).send(randomWorkout);
  
});

app.post(`/api/watchlist`, ctrl.addItem)
app.delete(`/api/watchlist/:id`, ctrl.deleteItem)

app.listen(4000, () => console.log("Server running on 4000"));
