from django.shortcuts import render
from rest_framework.views import APIView
# Create your views here.
from django.http import HttpResponse
from django.http import JsonResponse
from .models import *
from .serializers import *
from rest_framework.response import Response
from django.core.serializers import serialize
from rest_framework.decorators import api_view



class JournalDetailView(APIView):
    def get(self, request, pk):
        try:
            journal = ArticleDeJournal.objects.get(pk=pk)
        except ArticleDeJournal.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        data = {
            "titre": journal.titre,
            "resume": journal.resume,
            "introduction": journal.introduction,
            "revue": journal.revue_de_litterature,
            "methodes": journal.methodes,
            "resultats": journal.resultats,
            "discussion": journal.discussion,
            "conclusion": journal.conclusion,
            "references": journal.references,
            "remerciements": journal.remerciements,
            "url": journal.url,
            "volume": journal.volume,
            "pages": journal.pages,
            "date": journal.date,
            "auteurs": [auteur.name for auteur in journal.auteurs.all()]
        }
        return Response(data)


class GetallView(APIView):
        def get(self, request):
          articles = ArticleDeJournal.objects.all()
          livres = Livre.objects.all()
          theses =  These.objects.all()
          projets =  ProjetDeRecherche.objects.all()

          journal_serializer = JournalSerializer(articles, many=True)
          livre_serializer = LivreSerializer(livres, many=True)
          theses_serializer = TheseSerializer(theses, many=True)
          projets_serializer = ProjetDeRechercheSerializer(projets, many=True)
          data = {
            'articles': journal_serializer.data,
            'livres': livre_serializer.data,
            'theses': theses_serializer.data,
            'projets': projets_serializer.data,
               }
          return Response(data)

class JournalView(APIView):
    def get(self, request):
        queryset = ArticleDeJournal.objects.all()
        serializer = JournalSerializer(queryset, many=True)
        return Response(serializer.data)

class LivreView(APIView):
    def get(self, request):
        queryset = Livre.objects.all()
        serializer = LivreSerializer(queryset, many=True)
        return Response(serializer.data)

class TheseView(APIView):
    def get(self, request):
        queryset = These.objects.all()
        serializer = TheseSerializer(queryset, many=True)
        return Response(serializer.data)  

class ProjetView(APIView):
    def get(self, request):
        queryset = ProjetDeRecherche.objects.all()
        serializer = ProjetDeRechercheSerializer(queryset, many=True)
        return Response(serializer.data)

class ReactView(APIView):
    def get(self, request):
        output = [{
            "first_name": obj.first_name,
            "last_name": obj.last_name,
            "email": obj.email,
            "bio": obj.bio,
            "image": obj.image.url,
        } for obj in Chercheur.objects.all()]
        return Response(output)

def index(request):
    return HttpResponse("Hello, world. You're at the Urpima index.")


def chercheur_list(request):
    chercheurs = Chercheur.objects.all()
    serializer = ChercheurSerializer(chercheurs, many=True)
    return JsonResponse({'chercheur': serializer.data}, safe=False)
