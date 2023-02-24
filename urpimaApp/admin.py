from django.contrib import admin
from .models import Chercheur
from .models import ArticleDeJournal
from .models import Livre
from .models import These
from .models import ProjetDeRecherche
from .models import Auteur
# Register your models here.

admin.site.register(Chercheur)
admin.site.register(ArticleDeJournal)
admin.site.register(Livre)
admin.site.register(These)
admin.site.register(ProjetDeRecherche)
admin.site.register(Auteur)
