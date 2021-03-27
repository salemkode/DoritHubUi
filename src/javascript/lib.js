let array = {
    select : (e) => document.querySelector(e),
    async getJson(url){
      let X = await fetch(url);
      return await X.json();
    }
}
module.exports = array;