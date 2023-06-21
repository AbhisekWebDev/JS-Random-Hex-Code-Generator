const getColor = () => {
    const randomNum = Math.floor(Math.random() * 16777215);
    console.log(randomNum);

    const randomCode = "#" + randomNum.toString(16); //16 stands for hex
    console.log(randomCode);

    document.body.style.backgroundColor = randomCode;
    document.getElementById('color-code').innerHTML = randomCode;

    navigator.clipboard.writeText(randomCode);
}

// event call
document.getElementById('btn').addEventListener(
    'click',
    getColor
)

// initial call
getColor();