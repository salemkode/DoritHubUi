async function getJson(url) {
    let X = await fetch(url);
    return await X.json();
}
let select = (e) => document.querySelector(e);
let urlServer = "http://127.0.0.1:10";

let array = {
  async login(username, password, page) {
    let result = await getJson(
      `${urlServer}/api/login?user=${username}&&pass=${password}`
    );
    //let err = select("#err");
    if (result.state === 200) {
      localStorage.setItem("key", result.data.key);
      page.redirect("/");
    } else {
      throw new SyntaxError(result.err);
    }
  },
  async stop(name) {
    return await getJson(`${urlServer}/api/pm2/stop/${name}`);
  },
  async restart(name) {
    return await getJson(`${urlServer}/api/pm2/restart/${name}`);
  },
  async remove(name) {
    return await getJson(`${urlServer}/api/pm2/delete/${name}`);
  }
};
module.exports = array;
