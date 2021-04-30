# Mercado libre Challenge ✨
This proyect is about a challenge where I´ve been working on an API-Rest from Mercadolibre.
Here you can filter by status, order by price , etc.
<p align="left"> <img src="https://komarev.com/ghpvc/?username=tejon5&label=Profile%20views&color=0e75b6&style=flat" alt="tejon5" /> </p>

# Backend 🔹
We use the following Mercado Libre endpoint https://api.mercadolibre.com/sites/MLA/search?q={query}. It receives a queryString with parameter q with a string indicating the keyword to search for.

/api/search 🔎
This route receives a queryString with a search term. For example: /api/search?query=sneakers, which returns an array of Mercado Libre items.

Memory Cache 🔮
In each search request, a cache is created, so that the next search does not use the Mercado Libre API, but the data is retrieved from the cache.

# Front-End 🔸
Our App has the following components:

SearchBar 🔎
It has a controlled form with a search input, which triggers requests to the API (to our BACK-END, not to Mercado Libre).

Product Card 📑
In this component a particular product is shown, with the following detail:

its image.
its title.
its price (with currency).
its condition.
if it is in stock or not.
Catalog 📁
This component will display an array of products (obtained from the API) using Product Card. It also allows:

Sort products based on price, ascending or descending.
Filter by condition.
Page 30 product results by page.
