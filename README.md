# Mercado libre Challenge ✨
This proyect is about a challenge where I´ve been working on an API-Rest from Mercadolibre.
Here you can filter by status, order by price , etc.

# Backend 🔹
We use the following Mercado Libre endpoint https://api.mercadolibre.com/sites/MLA/search?q={query}. It receives a queryString with parameter q with a string indicating the keyword to search for.

/api/search
This route receives a queryString with a search term. For example: /api/search?query=sneakers, which returns an array of Mercado Libre items.

Memory Cache 🔮
In each search request, a cache is created, so that the next search does not use the Mercado Libre API, but the data is retrieved from the cache.
