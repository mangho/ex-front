let fnc={}
fnc.transJsonToUrl=(json)=>{
   return Object.keys(json).map(function (key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
    }).join("&");
}
export default fnc;