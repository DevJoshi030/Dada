from django.contrib import admin
from .models import Comment, Contact, Blog, Subscribe

# Register your models here.
admin.site.register(Contact)
admin.site.register(Blog)
admin.site.register(Subscribe)
admin.site.register(Comment)
