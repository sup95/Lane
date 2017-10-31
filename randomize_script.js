//Randomize Images
function getRandomImage() {
  var images = ["beautiful_walkway.jpg","deansgate_castlefield.jpg", "street_beauty.jpg", "creek.jpg",
                "waterway_and_sidewalk.jpg", "waterway_old_factory.jpg", "white_bridge.jpg", "trees.jpg",
                "principal_tower.jpg", "sky_backdrop.jpg", "building_and_tram.jpg", "architecture.jpg",
                "looming_tower.jpg"];

  return images[Math.floor(Math.random() * images.length)];
}

document.getElementById("bg").style.backgroundImage = "url('images/" + getRandomImage() + "')";

//Randomize quotes
function getRandromQuote()  {
  var quotes = [
    "Explore. Dream. Discover.",
    "Strive for Excellence",
    "Do your best. Then do better. ;)",
    "It's the little things in life. <3 ",
    "I know nothing with any certainty, but the sight of the stars makes me dream. - Vincent Van Gogh",
    "Dare to do what you dare to dream. ",
    "Passionately Curious. :)",
    "Living in Inertia. :P",
    "Simple and Sophisticated. :)",
    "Live. Laugh. Love.",
    "Keep It Simple",
    "Theri Baby"
    
  ]

  return quotes[Math.floor(Math.random() * quotes.length)];
}

document.getElementById("quote").innerHTML = getRandromQuote();
