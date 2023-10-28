const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const numberBtn = document.getElementById("numberButton")
const letterBtn = document.getElementById("letterButton")
const soundBtn = docunmen.getElementById('sound button')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortunes/")
        .then(res => {
            const data = res.data;
            alert(data); 
        });
};


const getNumber = () => {
    axios.get("http://localhost:4000/api/number")
    .then(res => {
        const data = res.data;
        alert(data)
    } )   
};

const getLetter = () => {
    axios.get("http://localhost:4000/api/letter")
    .then(res => {
        const data = res.data;
        alert(data)
    })
};

const getSound = () => {
    axios.get("http://localhost:4000/api/sound")
    .then(res => {
        const data = res.status;
        alert(data)
    })
};


numberBtn.addEventListener('click', getNumber)
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
letterBtn.addEventListener('click',getLetter)
soundBtn.addEventListener('click', getSound)