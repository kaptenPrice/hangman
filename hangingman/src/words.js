const wordArr=["Mölndal","Tokyo","Bangkok","Paris","Stockholm","Alingsås"]
let randWordGenerator=()=>{
    let rand=Math.floor(Math.random()*wordArr.length);
    return wordArr[rand];

}
export default randWordGenerator;