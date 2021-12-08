from rest_framework import viewsets
from booking.models import Book
from booking.serializers import BookSerializer
from django.db.models import Q
from rest_framework.decorators import action
from rest_framework.response import Response
from django.http.response import Http404 ,JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

class BookViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides list and retrieve actions.
    """
    queryset = Book.objects.all()
    serializer_class = BookSerializer

@csrf_exempt
def bookApi(request,id=0):
    if request.method=='GET':
        book = Book.objects.all()
        book_serializer = BookSerializer(book, many=True)
        return JsonResponse(book_serializer.data, safe=False)

    elif request.method=='POST':
        book_data=JSONParser().parse(request)
        book_serializer = BookSerializer(data=book_data)
        if book_serializer.is_valid():
            book_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        book_data = JSONParser().parse(request)
        book=Book.objects.get(id=book_data['id'])
        book_serializer=BookSerializer(book,data=book_data)
        if book_serializer.is_valid():
            book_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        book=Book.objects.get(id=id)
        book.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)
