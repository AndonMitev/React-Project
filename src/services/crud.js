const KinveyUrl = "https://baas.kinvey.com";
const AppKey = "kid_BkejUDPf7";
const AppSecret = "c247356410c4498aa99d357896425564";
const MasterSecret = "4b0474f826c442da9d6c4200f33fd4c4";

const crud = (() => {
  const getAuth = auth => {
    if (auth === "basic") {
      return `Basic ${btoa(AppKey + ":" + AppSecret)}`;
    } else if (auth === "master") {
      return `Basic ${btoa(AppKey + ":" + MasterSecret)}`;
    }
    return `Kinvey ${localStorage.getItem("authtoken")}`;
  };

  const getModule = currentModule => {
    if (currentModule === "user") {
      return "user";
    } else {
      return "appdata";
    }
  };

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
  };

  const post = (currentModule, authorization, endPoint, data) =>
    fetchReq(currentModule, "POST", authorization, endPoint, data);

  const get = (currentModule, authorization, endPoint) =>
    fetchReq(currentModule, "GET", authorization, endPoint);

  const update = (currentModule, authorization, endPoint, data) =>
    fetchReq(currentModule, "PUT", authorization, endPoint, data);

  const remove = (currentModule, authorization, endPoint) =>
    fetchReq(currentModule, "DELETE", authorization, endPoint);

  return {
    post,
    get,
    update,
    remove
  };
})();

export default crud;
