from django.shortcuts import render
from rest_framework import viewsets
from booking.models import Book
from booking.serializers import BookSerializer
from django.db.models import Q
from rest_framework.decorators import action
from rest_framework.response import Response
from django.http.response import Http404
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser


class BookViewSet(viewsets.ModelViewSet):

    queryset = Book.objects.all()
    serializer_class = BookSerializer

    @action(detail=False, methods=['GET'])
    def search(self, request, *args, **kwargs):
        search_post = request.GET.get('_name')
        if search_post or search_post == '':
            try:
                dataSet = self.queryset.filter(Q(name__icontains=search_post))
            except Book.DoesNotExist:
                raise Http404("Books does not exist")
        else:
            dataSet = self.queryset.all()
        books = self.serializer_class(dataSet, many=True)
        return Response(books.data)

@csrf_exempt
def bookApi(request,id=0):
        if request.method=='GET':
            books = Book.objects.all()
            books_serializer = BookSerializer(books, many=True)
            return JsonResponse(books_serializer.data, safe=False)

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
