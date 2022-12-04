import axios from "axios";

export async function addSteps(data) {
  try {
    const response = await axios.post(
      "https://buildpermit.hojres.com/api/process_pipe_store",
      data
    );
    return response;
  } catch (error) {}
}
export async function getSteps(data) {
  try {
    const response = await axios.post(
      "https://buildpermit.hojres.com/api/process_pipe",
      ""
    );
    return response;
  } catch (error) {}
}
export async function deleteSteps(id) {
  try {
    const response = await axios.post(`https://buildpermit.hojres.com/api/process_pipe_delete/${id}`);
    return response;
  } catch (error) {}
}
