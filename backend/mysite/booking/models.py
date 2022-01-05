from django.db import models

# Create your models here.

class Book(models.Model):
    book_categories = (
        ('FIC', 'Fiction'),
        ('DOC', 'Documentary'),
        ('SCI', 'Science'),
        ('HIS', 'History'),
        ('TEC', 'Technology'),
    )
    name = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    pub_date = models.CharField(max_length=100)
    category = models.CharField(max_length=3, choices=book_categories)
    image = models.CharField(max_length=255, default='')
    describe = models.CharField(max_length=999, default='')

    def __str__(self):
        return self.name