from django.db.models import fields
from django.db.models.base import Model
from rest_framework import serializers
from booking.models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'name', 'author', 'pub_date', 'category', 'image', 'describe']