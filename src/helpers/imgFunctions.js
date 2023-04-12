const fs = require('fs');

const getSrcImg = (extension, EID) => {
    const pathCorrectImg = "./../../assets/profile-pictures/" + EID + "." + extension;
    const pathImgNotFound = "./../../assets/profile-pictures/notfound.png";

    pathCorrectImg = fs.existsSync(pathCorrectImg) ? pathCorrectImg : pathImgNotFound;
    return pathCorrectImg;
}

module.exports = {
    getSrcImg
}