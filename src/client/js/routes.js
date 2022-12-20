const dev = true;
export const host = dev ? "http://127.0.0.1:5000" : "";

// Makes a request to flask back end at specified host
export default async function fetchRequest() {
  const api_path = "/";
  const data = await fetch(host + api_path, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
  console.log(data);
  return data;
}
