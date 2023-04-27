const params = window.location.search;
const urlSearchParams = new URLSearchParams(params);

console.log(urlSearchParams.get('code'));