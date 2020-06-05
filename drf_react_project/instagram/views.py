from django.shortcuts import render
from .models import Post
# Create your views here.

def search_list(request):
    qs = Post.objects.all()
    p = request.GET.get('p', '')
    if 'p':
        search_list = qs.filter(message__icontains=p)

    return render(request, 'instagram/search_list.html' ,{
        'search_list': search_list,
        'p': p
    })