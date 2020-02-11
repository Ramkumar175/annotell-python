# Annotell Management System

Python 3 library providing access to AMS. 

To install with pip run `pip install annotell-ams`

## Metadata Example
Set env ANNOTELL_API_TOKEN

Stream all items matching a query
```python
from annotell.ams.query import QueryClient
query_client = QueryClient()
resp = query_client.stream_metadata(query_filter="id = X")
for item in resp.items():
    print(item)
```