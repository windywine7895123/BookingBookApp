from django.contrib import admin
from .models import Book
# Register your models here.




class BookAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,               {'fields': ['name']}),
        ('Date information', {'fields': ['pub_date'], 'classes': ['collapse']}),
    ]
    list_display = ('name', 'author', 'pub_date')
    list_filter = ['pub_date']
    search_fields = ['name']

admin.site.register(Book)
