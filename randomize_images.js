function getRandomImage() {
  var images = ["beautiful_walkway.jpg","deansgate_castlefield.jpg", "street_beauty.jpg"];
  return images[Math.floor(Math.random() * images.length)];
}

document.getElementById("bg").style.backgroundImage = "url('images/" + getRandomImage() + "')";
