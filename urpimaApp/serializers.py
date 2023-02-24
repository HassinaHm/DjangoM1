from rest_framework import serializers
from .models import *

class ChercheurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chercheur
        fields = ['id','first_name','last_name','email','password','tel','image','statut','adresse','bio','hdr','phd']


class AuteurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Auteur
        fields = '__all__'

class JournalSerializer(serializers.ModelSerializer):
    auteurs = AuteurSerializer(many=True)

    class Meta:
        model = ArticleDeJournal
        fields = '__all__'


class LivreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Livre
        fields = '__all__'

class TheseSerializer(serializers.ModelSerializer):
    class Meta:
        model = These
        fields = ['id','titre','auteur','Encadreur','Etablissement','date','resume','mots_cles','citation','url']

class ProjetDeRechercheSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjetDeRecherche
        fields = '__all__'
