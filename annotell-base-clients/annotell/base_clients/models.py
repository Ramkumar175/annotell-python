from typing import Union, Optional

from pydantic import BaseModel


class Links(BaseModel):
    next: Optional[str]


class PaginatedResponse(BaseModel):
    data: Union[dict, list]
    links: Links
