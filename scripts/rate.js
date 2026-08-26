const URL_EUR_JPY =
    "https://api.frankfurter.dev/v2/rates?base=EUR&quotes=JPY";

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

function getEURJPYRate(eurRate, exchangeRate) {
    return eurRate * exchangeRate;
}

function getJPStyleDate(dateString) {
    const dateArr = dateString.split("-");

    const year = dateArr[0];
    const month = dateArr[1];
    const day = dateArr[2];

    return `${year}年${month}月${day}日`;
}