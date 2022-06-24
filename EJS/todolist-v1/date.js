
//module.exports.getDate //you can make it shorter just by saying exports
exports.getDate = getDate;

function getDate(){
    const today = new Date();
    const options = {
        weekday: "long",
        year: 'numeric',
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
}

exports.getDay = getDay;

function getDay(){
    const today = new Date();
    const options = {
        weekday: "long",
    };
    return today.toLocaleDateString("en-US", options);
}
