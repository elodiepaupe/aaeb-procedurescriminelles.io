# Université de Genève – Numériser le patrimoine (Simon Gabay)

Ce projet web a été réalisé dans le cadre de la validation du certificat d'humanités numériques proposé par l'Université de Genève (2021-2022). 

## Pourquoi ce projet? 
Le site web réalisé dans le cadre de ce cours s'insère dans le projet-pilote du projet "Crimes et châtiments" porté par les [Archives de l'ancien Évêché de Bâle (AAEB](www.aaeb.ch). Le site proposé pour la validation du séminaire "Numériser le patrimoine II" permet de clarifier les attentes et d'expérimenter. Il ne saurait être considéré comme version définitive: le contenu des pages statiques n'est pas définitif, les bases de données mises en lignes doivent être complétées et la chaîne de traitement des éditions (alto > html) mériterait d'être enrichie.

## Retour sur le projet
### Calendrier 
<img src="photos/AAEB-11.jpeg" style="align:right; float:right; width:200px;">
Après une première séance qui a permis de clarifier le contenu à faire figurer dans le site –  la communication autour du projet, édition numérique et médiation –, une seconde séance a eu lieu avec les responsables du projet "Crimes et châtiments" des Archives de l'ancien Évêché de Bâle. Les projets de mise en page griffonnés ont été présentés lors de cette séance. Ils ont été amendés par les participants qui ont également fait part de nouveaux besoins: 
- abécédaire;
- base de données. 

Le site en développement a fait l'objet d'un tour de correction avant mi-juillet 2022. 
### Chaîne de traitement
Le contenu de la plupart des pages a été créé pour l'occasion. 

Les deux bases de données des [condamnations extraites du registre des sentences criminelles](bdd_cod205a.html) et des [sorcières](bdd_sorciere.html) sont en cours de réalisation par les AAEB. Les données sont tirés de [l'inventaire en cours de réalisation](https://archives-aaeb.jura.ch/suchinfo.aspx). 

Le contenu de l'[abécédaire](abecedaire.html) est limité pour le moment. Il pourrait s'agir d'un projet de médiation développé à l'avenir. 

Le contenu des [éditions](lecture.html) est généré à partir des fichiers alto obtenus par transcription à l'aide d'e-Scriptorium. Ces derniers sont directement transformés en fichiers html, sans ajout de métadonnées supplémentaires. Le fichier xslt qui permet de générer chaque page (transcription et image) est [disponible](scripts/ALTOtoHTML_v2.xsl).

L'architecture html et feuille de style css ont été réalisés par mes soins. Lorsque j'ai emprunté du code à des tiers, un commentaire le signale.

Chandolin, le 19 juillet 2022. 

