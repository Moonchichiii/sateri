from typing import Any

from decouple import config


def env(key: str, default: Any = None, cast: Any = str) -> Any:
    return config(key, default=default, cast=cast)
