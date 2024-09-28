from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Item(models.Model):
    size_choices = (
        ('Extra Small', 'XS'),
        ('small', 'S'),
        ('medium', 'M'),
        ('Large', 'L'),
        ('Extra Large', 'XL'),
    )
    banner = models.ImageField(default='fallback.png', blank=True)
    cloth_brand = models.CharField(max_length=100)
    cloth_color = models.CharField(max_length=100)
    cloth_type = models.CharField(max_length=100)
    cloth_size = models.CharField(max_length=100, choices=size_choices)

class user_item(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    size_choices = (
        ('Extra Small', 'XS'),
        ('small', 'S'),
        ('medium', 'M'),
        ('Large', 'L'),
        ('Extra Large', 'XL'),
    )
    banner = models.ImageField(default='fallback.png', blank=True)
    cloth_brand = models.CharField(max_length=100)
    cloth_color = models.CharField(max_length=100)
    cloth_type = models.CharField(max_length=100)
    cloth_size = models.CharField(max_length=100, choices=size_choices)

    def __str__(self):
        return f"{self.cloth_brand} - {self.user.username}"