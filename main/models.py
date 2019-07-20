from django.db import models

# Create your models here.

class reservation(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    year = models.IntegerField()
    month = models.IntegerField()
    day = models.IntegerField()
    hour_start = models.IntegerField()
    hour_end = models.IntegerField()
    city = models.CharField(max_length=60)
    message = models.TextField()
