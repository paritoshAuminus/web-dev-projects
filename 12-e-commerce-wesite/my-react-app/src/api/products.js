const BASE_URL = 'https://dummyjson.com/products';

fetch(BASE_URL)
.then(res => res.json())
.then(data => data)