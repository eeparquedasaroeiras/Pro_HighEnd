from django.http import HttpResponse
from django.http.response import HttpResponseRedirect
from django.template import loader
from django.shortcuts import render

from .models import Produto, PedidoItem, Pedido
from django.template import TemplateDoesNotExist
from django.http import Http404

def login_view(request):
    template = loader.get_template("index.html")
    context = {}
    return HttpResponse(template.render(context, request))

def categorias(request):
    template = loader.get_template("categorias.html")
    context = {}
    return HttpResponse(template.render(context, request))

def index(request):
    return render(request, 'index.html')

def perfil(request):
    template = loader.get_template("perfil.html")
    context = {}
    return HttpResponse(template.render(context, request))

def produtos(request):
    template = loader.get_template("produtos.html")
    context = {}
    return HttpResponse(template.render(context, request))

def detalhes(request, id):
    latest_question_list = Produto.objects.get(pk=id)
    template = loader.get_template("produto/details.html")
    context = {
        "latest_question_list": latest_question_list,
    }
    return HttpResponse(template.render(context, request))

def carrinho(request):
    latest_question_list = PedidoItem.objects.all()
    template = loader.get_template("carrinho/index.html")
    context = {
        "latest_question_list": latest_question_list,
    }
    return HttpResponse(template.render(context, request))

def adicionar_carrinho(request, id):
    pedido = Pedido.objects.create(nome_cliente="The Beatles")
    pedido.save()

    pedido_item = PedidoItem(produto_id=id, pedido_id=pedido.id, quantidade=1, preco_un=10.99)
    pedido_item.save()

    return HttpResponseRedirect("/carrinho/")

def remover_carrinho(request, id):
    PedidoItem.objects.filter(id=id).delete()

    return HttpResponseRedirect("/carrinho/")


def static_page(request, page):
    """Render a template by filename if it exists in the templates folder.

    This supports requests like /teclado-mecanico-pro.html which map to
    the template 'teclado-mecanico-pro.html'. If the template is missing
    a Http404 is raised so Django will show the normal 404 page (when
    DEBUG=False) or the debug 404 (when DEBUG=True).
    """
    template_name = f"{page}.html"
    try:
        return render(request, template_name)
    except TemplateDoesNotExist:
        raise Http404()