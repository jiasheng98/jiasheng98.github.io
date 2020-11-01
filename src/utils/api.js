import { SERVER_HOST, SERVER_PORT } from "../../config";
import { store } from "../../src/state/redux/store";
import fetch from "isomorphic-unfetch";

export const isomorphicUnfetchData = async (
  { req, route, method, body } /* { req, route, method = "GET", body } */
) => {
  try {
    const response = await fetch(`${SERVER_HOST}:${SERVER_PORT}/${route}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        cookie: req ? req.headers.cookie : undefined,
      },
      body: body ? JSON.stringify(body) : undefined,
      credentials: "include",
    });
    //.then(
    //(response) => {
    if (response.ok) {
      return response.json();
    } else {
      var error = new Error(
        "Error " + response.status + ": " + response.statusText
      );
      if (response.status == 401) {
        store.dispatch({
          type: "UNAUTHORIZED_REDIRECT",
        });
        // throw "unauthorized access";
      }
      error.response = response;
      throw error;
    }
    // },
    // (error) => {
    //   var errmess = new Error(error.message);
    //   throw errmess;
    // }
    // )
    // .then((response) => response.json());
    // return response;
  } catch (error) {
    console.log("error", error);
    //alert("error", error);

    return error;
  }
};
