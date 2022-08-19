const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

// selectors

const passbox = document.getElementById("result");
const totalChar = document.getElementById("slider");
const upperInput = document.getElementById("uppercase");
const lowerInput = document.getElementById("lowercase");
const numberInput = document.getElementById("number");
const symbolInput = document.getElementById("symbol");

const getRandomData = (dataset) => {
  return dataset[Math.floor(Math.random() * dataset.length)];
};

const generatePassword = (password = "") => {
  if (upperInput.checked) {
    password += getRandomData(upperSet);
  }
  if (lowerInput.checked) {
    password += getRandomData(lowerSet);
  }
  if (numberInput.checked) {
    password += getRandomData(numberSet);
  }
  if (symbolInput.checked) {
    password += getRandomData(symbolSet);
  }
  if (password.length < totalChar.value) {
    return generatePassword(password);
  }
  passbox.innerText = truncateString(password, totalChar.value);
};
generatePassword();

document.getElementById("generate").addEventListener("click", function () {
  generatePassword();
});


function truncateString(str,num){
    if(str.length > num){
        let substr = str.substring(0,num)
        return substr
    }
    else{
        return str
    }
}
