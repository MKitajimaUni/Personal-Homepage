const URL_EUR_JPY ="https://api.frankfurter.dev/v2/rates?base=EUR&quotes=JPY";
const URL_CZK_JPY = "https://api.frankfurter.dev/v2/rates?base=CZK&quotes=JPY";

async function getEURJPYJson() {
    try {
        const response = await fetch(URL_EUR_JPY);
        const data = await response.json();

        return {
            rate: data[0].rate,
            date: data[0].date
        };
    } catch (error) {
        console.error("Error fetching EUR to JPY rate:", error);
        return null;
    }
}

async function getCZKJPYJson() {
    try {
        const response = await fetch(URL_CZK_JPY);
        const data = await response.json();

        return {
            rate: data[0].rate,
            date: data[0].date
        };
    } catch (error) {
        console.error("Error fetching CZK to JPY rate:", error);
        return null;
    }
}

function getRate(amount, exchangeRate) {
    return amount * exchangeRate;
}

function getJPStyleDate(dateString) {
    const dateArr = dateString.split("-");

    const year = parseInt(dateArr[0]);
    const month = parseInt(dateArr[1]);
    const day = parseInt(dateArr[2]);

    return `${year}年${month}月${day}日`;
}