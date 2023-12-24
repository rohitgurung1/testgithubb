// Define Kakashi Hatake object
var kakashiHatake = {
    name: "Kakashi Hatake",
    village: "Hidden Leaf Village",
    rank: "Jonin",
    specialTechnique: "Sharingan",
    age: 35, // Just an example age
    isSensei: true,
    getInfo: function() {
      return this.name + " is a " + this.rank + " from the " + this.village + ". He is known for his " + this.specialTechnique + " and is a skilled sensei.";
    }
  };
  
  // Display Kakashi's information
  console.log(kakashiHatake.getInfo());
  