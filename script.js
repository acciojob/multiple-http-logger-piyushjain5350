const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

async function fetchUrl(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return { url, data };
    } else {
      return { url, error: `Error fetching ${url}: ${response.status} - ${response.statusText}` };
    }
  } catch (error) {
    return { url, error: `Error fetching ${url}: ${error.message}` };
  }
}

// Function to fetch all URLs and log the responses
async function fetchAllUrls(urls) {
  try {
    const responses = await Promise.all(urls.map(fetchUrl));
    responses.forEach((response) => {
      if (response.error) {
        console.error(response.error);
      } else {
        console.log(`Response from ${response.url}:`, response.data);
      }
    });
  } catch (error) {
    console.error(error.message);
  }
}

fetchAllUrls(urls);
// Don't change the above line
// Write your code here
