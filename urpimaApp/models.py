from django.db import models

# Create your models here.

class Chercheur(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(max_length=254) # add email field
    password = models.CharField(max_length=50) # add password field
    tel =  models.CharField(max_length=8)
    image = models.ImageField(upload_to='images/')
    statut = models.CharField(max_length=50)
    adresse = models.CharField(max_length=50)
    bio = models.CharField(max_length=200, blank=True )
    hdr = models.BooleanField()
    phd = models.BooleanField()
   
    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class ArticleDeJournal(models.Model):
    titre = models.CharField(max_length=200)
    resume = models.TextField()
    introduction = models.TextField(null=True, blank=True)
    revue_de_litterature = models.TextField(null=True, blank=True)
    methodes = models.TextField(null=True, blank=True)
    resultats = models.TextField(null=True, blank=True)
    discussion = models.TextField(null=True, blank=True)
    conclusion = models.TextField(null=True, blank=True)
    references = models.TextField(null=True, blank=True)
    url = models.CharField(max_length=200,null=True, blank=True)
    volume=models.IntegerField(null=True, blank=True)
    pages=models.CharField(max_length=40,null=True, blank=True)
    date=models.DateField(null=True, blank=True)
    remerciements = models.TextField(null=True, blank=True)
    auteurs = models.ManyToManyField('Auteur')

class Auteur(models.Model):
    name = models.CharField(max_length=100)
    affiliation = models.CharField(max_length=200, null=True, blank=True)


class Livre(models.Model):
    titre = models.CharField(max_length=200)
    auteur = models.CharField(max_length=200)
    Editeur = models.CharField(max_length=200)
    date_de_publication = models.DateField()
    isbn = models.CharField(max_length=13, unique=True)
    Edition = models.CharField(max_length=50, blank=True)
    nombre_de_pages = models.PositiveIntegerField()
    résumé = models.TextField(blank=True)
    critiques = models.TextField(blank=True)
    mots_clés = models.CharField(max_length=200, blank=True)
    pdf= models.FileField(upload_to='pdfs/',null=True)

  

class These(models.Model):
    titre = models.CharField(max_length=200)
    auteur = models.CharField(max_length=200)
    Encadreur = models.CharField(max_length=200)
    Etablissement = models.CharField(max_length=200)
    date = models.DateField()
    resume= models.TextField(blank=True)
    mots_cles = models.CharField(max_length=200, blank=True)
    citation = models.TextField(blank=True)
    url = models.URLField(blank=True)

class ProjetDeRecherche(models.Model):
    titre = models.CharField(max_length=200)
    resume = models.TextField()
    objectifs = models.TextField(null=True,blank=True)
    questions = models.TextField(null=True,blank=True)
    methodologie = models.TextField(null=True,blank=True)
    hypotheses = models.TextField(null=True,blank=True)
    plan_de_travail = models.TextField(null=True,blank=True)
    budget = models.DecimalField(max_digits=10, decimal_places=2,null=True)
    resultats_attendus = models.TextField(null=True,blank=True)
    implications = models.TextField(null=True,blank=True)
    biblio = models.TextField(null=True,blank=True)


