# Generated by Django 4.1.7 on 2023-02-20 23:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('urpimaApp', '0002_alter_chercheur_adresse_alter_chercheur_statut'),
    ]

    operations = [
        migrations.CreateModel(
            name='Auteur',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('affiliation', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Livre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titre', models.CharField(max_length=200)),
                ('auteur', models.CharField(max_length=200)),
                ('Editeur', models.CharField(max_length=200)),
                ('date_de_publication', models.DateField()),
                ('isbn', models.CharField(max_length=13, unique=True)),
                ('Edition', models.CharField(blank=True, max_length=50)),
                ('nombre_de_pages', models.PositiveIntegerField()),
                ('design_de_couverture', models.CharField(blank=True, max_length=200)),
                ('table_des_matieres', models.TextField(blank=True)),
                ('résumé', models.TextField(blank=True)),
                ('critiques', models.TextField(blank=True)),
                ('mots_clés', models.CharField(blank=True, max_length=200)),
                ('numéro_de_classification', models.CharField(blank=True, max_length=20)),
                ('disponibilité', models.CharField(blank=True, max_length=50, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='ProjetDeRecherche',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titre', models.CharField(max_length=200)),
                ('resume', models.TextField()),
                ('objectifs', models.TextField()),
                ('questions', models.TextField()),
                ('methodologie', models.TextField()),
                ('hypotheses', models.TextField()),
                ('plan_de_travail', models.TextField()),
                ('budget', models.DecimalField(decimal_places=2, max_digits=10)),
                ('resultats_attendus', models.TextField()),
                ('implications', models.TextField()),
                ('biblio', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='These',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titre', models.CharField(max_length=200)),
                ('auteur', models.CharField(max_length=200)),
                ('Encadreur', models.CharField(max_length=200)),
                ('Etablissement', models.CharField(max_length=200)),
                ('date', models.DateField()),
                ('resume', models.TextField(blank=True)),
                ('mots_cles', models.CharField(blank=True, max_length=200)),
                ('citation', models.TextField(blank=True)),
                ('url', models.URLField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='ArticleDeJournal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titre', models.CharField(max_length=200)),
                ('resume', models.TextField()),
                ('introduction', models.TextField(blank=True, null=True)),
                ('revue_de_litterature', models.TextField(blank=True, null=True)),
                ('methodes', models.TextField(blank=True, null=True)),
                ('resultats', models.TextField(blank=True, null=True)),
                ('discussion', models.TextField(blank=True, null=True)),
                ('conclusion', models.TextField()),
                ('references', models.TextField()),
                ('remerciements', models.TextField(blank=True, null=True)),
                ('informations_financement', models.TextField(blank=True, null=True)),
                ('auteurs', models.ManyToManyField(to='urpimaApp.auteur')),
            ],
        ),
    ]
