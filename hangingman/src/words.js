const wordArr=["Los Angeles","Tokyo","Bangkok","Paris","Stockholm","Gotham city"]
let randWordGenerator=()=>{
    let rand=Math.floor(Math.random()*wordArr.length);
    return wordArr[rand];

}
export default randWordGenerator;