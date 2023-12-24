var kakashiHatake = {
  name: "Kakashi Hatake",
  village: "Hidden Leaf Village",
  rank: "Jonin",
  specialTechnique: "Sharingan",
  age: 35,
  isSensei: true
};

// Update HTML elements with Kakashi's information
document.getElementById('name').innerText = kakashiHatake.name;
document.getElementById('village').innerText = kakashiHatake.village;
document.getElementById('rank').innerText = kakashiHatake.rank;
document.getElementById('technique').innerText = kakashiHatake.specialTechnique;
document.getElementById('age').innerText = kakashiHatake.age;
document.getElementById('isSensei').innerText = kakashiHatake.isSensei ? 'Yes' : 'No';
