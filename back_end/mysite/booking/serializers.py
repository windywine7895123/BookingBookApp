from rest_framework import serializers
from booking.models import Book


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id','name', 'author', 'pub_date', 'category']

