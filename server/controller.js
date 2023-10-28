module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    
    getFortune: (req, res) => {
        const fortunes = [
            "A beautiful, smart, and loving person will be coming into your life.",
            "A fresh start will put you on your way",
            "A hunch is creativity trying to tell you something."
        ];
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        res.status(200).send(randomFortune);
    },
   
    getNumber: (req, res) => {
        const numbers = [1, 42, 100, 7, 20]; 
        let randomIndex = Math.floor(Math.random() * numbers.length);
        let randomNumber = numbers[randomIndex];
        res.status(200).send(randomNumber.toString()); 
    },

    getLetter: (req, res) => {
        const letters = ['A', 'B', 'C', 'D', 'E']; 
        let randomIndex = Math.floor(Math.random() * letters.length);
        let randomLetter = letters[randomIndex];
        res.status(200).send(randomLetter);
    },

    getSound: (req, res) => {
        const sounds = ['scream', 'laugh', 'cry']
        let randomIndex = Math.floor(Math.random() * sounds.length);
        let randomSound = sounds[randomIndex];
        res.status(200).send(randomSound);
    }
    

    
};








