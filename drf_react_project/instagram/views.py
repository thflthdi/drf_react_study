from django.shortcuts import render, get_object_or_404
from django.views.generic import DetailView

from .models import Post
from django.http import HttpRequest, HttpResponse, Http404


# Create your views here.

def search_list(request):
    qs = Post.objects.all()
    p = request.GET.get('p', '')
    if 'p':
        search_list = qs.filter(message__icontains=p)

    return render(request, 'instagram/search_list.html', {
        'search_list': search_list,
        'p': p
    })


# def post_detail(request: HttpRequest, pk: int) -> HttpResponse:  # 힌트주기 유행
#     post = get_object_or_404(Post, pk=pk)
#     # try:
#     #     post = Post.objects.get(pk=pk)
#     # except Post.DoesNotExist:
#     #     raise Http404
#     return render(request, 'instagram/post_detail.html', {
#         'post': post,
#     })

post_detail = DetailView.as_view(model=Post)
