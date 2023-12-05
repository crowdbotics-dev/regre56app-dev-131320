from django.conf import settings
from django.db import models


class GGwsv(models.Model):
    "Generated Model"
    jgj = models.BigIntegerField()
    ewgs = models.BooleanField(
        null=True,
        blank=True,
    )
    gnv = models.CharField(
        max_length=255,
        null=True,
        blank=True,
    )
