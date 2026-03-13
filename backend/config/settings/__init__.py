from decouple import config

DJANGO_ENV = config("DJANGO_ENV", default="development")

if DJANGO_ENV == "production":
    from .production import *
elif DJANGO_ENV == "test":
    from .test import *
else:
    from .development import *
