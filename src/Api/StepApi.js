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
      "https://buildpermit.hojres.com/api/process_pipe"
    ,'');
    
    // const data = response.data.ProcessPipe[0].json();
    // console.log(data);
    return response;
  } catch (error) {}
}
