from django.contrib import admin
from .models import Item, user_item, Contact

# Register your models here.
admin.site.register(Item)
admin.site.register(user_item)
admin.site.register(Contact)