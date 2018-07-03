const KinveyUrl = "https://baas.kinvey.com";
const AppKey = "kid_BkejUDPf7";
const AppSecret = "c247356410c4498aa99d357896425564";

const crud = (() => {
  function getAuth(auth) {
    if (auth === "basic") {
      return `Basic ${btoa(AppKey + ":" + AppSecret)}`;
    } else {
      return `Kinvey ${localStorage.getItem("authtoken")}`;
    }
  }

  const getModule = (currentModule) => {
    if (currentModule === "user") {
      return "user";
    } else {
      return "appdata";
    }
  }

  const fetchReq = (currentModule, method, authorization, endPoint, data) => {
    return fetch(
      `${KinveyUrl}/${getModule(currentModule)}/${AppKey}/${endPoint}`,
      {
        method: method,
        headers: {
          Authorization: getAuth(authorization),
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    ).then(data => data.json());
  }

  const post = (currentModule, method, authorization, endPoint, data) => {
    return fetchReq(currentModule, method, authorization, endPoint, data);
  }
  const get = (currentModule, method, authorization) => {
    return fetchReq(currentModule, method, authorization);
  }

  /*
    (update = () => {}),
    (remove = () => {}); */

  return {
    post,
    get
  };
})();

export default crud;
