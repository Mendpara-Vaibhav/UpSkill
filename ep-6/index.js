const githubAPI = "https://api.github.com/users/Mendpara-Vaibhav";

const fetchData = async () => {
  try {
    const res = await fetch(githubAPI);
    const jsonData = await res.json();
    console.log(jsonData.bio);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("yeh hamesha chlega...");
  }
};
fetchData();
