/* function: fetch data based on a given url */
import { globalVars } from "../constants/globalvars";

export const fetchData = async (query) => {
  const url = query + "?format=json&apiKey=" + globalVars.apiKey;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return {ok: true, data: data};
  } else {
    const error = response.status + ': ' + response.statusText + ': ' + response.error;
    return {ok: false, error: error};
  }
}
