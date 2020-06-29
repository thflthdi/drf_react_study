from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404
from django.utils.decorators import method_decorator
from django.views.generic import DetailView, ListView, ArchiveIndexView, YearArchiveView

from .models import Post
from django.http import HttpRequest, HttpResponse, Http404


# Create your views here.

@method_decorator(login_required, name='dispatch')
class PostListView(ListView):
    model = Post
    paginate_by = 10
post_list = PostListView.as_view()

# @login_required
# def post_list(request):
#     qs = Post.objects.all()
#     p = request.GET.get('p', '')
#     if 'p':
#         post_list = qs.filter(message__icontains=p)
#
#     return render(request, 'instagram/post_list.html', {
#         'post_list': post_list,
#         'p': p
#     })


# def post_detail(request: HttpRequest, pk: int) -> HttpResponse:  # 힌트주기 유행
#     post = get_object_or_404(Post, pk=pk)
#     # try:
#     #     post = Post.objects.get(pk=pk)
#     # except Post.DoesNotExist:
#     #     raise Http404
#     return render(request, 'instagram/post_detail.html', {
#         'post': post,
#     })


# post_detail = DetailView.as_view(
#     model=Post,
#     queryset=Post.objects.filter(is_public=True))

class PostDetailView(DetailView):
    model = Post
    # queryset = Post.obects.filter(is_public=True)

    def get_queryset(self):
        qs = super().get_queryset()
        if not self.request.user.is_authenticated:
            qs = qs.filter(is_public=True)
        return qs

post_detail = PostDetailView.as_view()

post_archive = ArchiveIndexView.as_view(model=Post, date_field='created_at', paginate_by=7)

post_archive_year = YearArchiveView.as_view(model=Post, date_field='created_at', make_object_list=True)