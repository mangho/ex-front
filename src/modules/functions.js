let fnc={}
fnc.transJsonToUrl=(json)=>{
    Object.keys(json).map(function (key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
    }).join("&");
}
export default fnc;