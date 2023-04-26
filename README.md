# Les Petits Plats 


<img width="268" alt="68747470733a2f2f7769626d772e6769746875622e696f2f4c6573506574697473506c6174732f696d616765732f6c6f676f2e706e67" src="https://user-images.githubusercontent.com/104781650/234554351-a06305fc-4291-4f56-a0bd-90f724b1d0e9.png">


Projet 7 du parcours Développeur Javascript - React d'OpenClassroom  
## Contexte
"Après avoir édité des livres de cuisine pendant plusieurs années, l’entreprise a décidé de se lancer dans un nouveau projet : réaliser son propre site de recettes de cuisine à l’instar de Marmiton ou 750g."

## Objectifs
Réaliser un site de recettes (fourni via un fichier JSON) en implémentant un système de recherche.

### Scénario nominal de l'algorithme
Etape 1 : Le cas d’utilisation commence lorsque l’utilisateur entre au moins 3 caractères dans la barre de recherche principale.  
Etape 2 : Le système recherche des recettes correspondant à l’entrée utilisateur dans : le titre de la recette, la liste des ingrédients de la recette, la description de la recette.  
Etape 3 : L’interface est actualisée avec les résultats de recherche  
Etape 4 : Les champs de recherche avancée sont actualisés avec les informations ingrédients, ustensiles, appareil des différentes recettes restantes  
Etape 5 : L’utilisateur précise sa recherche grâce à l’un des champs : ingrédients, ustensiles, appareil.  
Etape 6 : Au fur et à mesure du remplissage les mots clés ne correspondant pas à la frappe dans le champ disparaissent. Par exemple, si l’utilisateur entre “coco” dans la liste d’ingrédients, seuls vont rester “noix de coco” et “lait de coco”  
Etape 7 : L’utilisateur choisit un mot clé dans le champ
Etape 8 : Le mot clé apparaît sous forme de tag sous la recherche principale  
Etape 9 : Les résultats de recherche sont actualisés, ainsi que les éléments disponibles dans les champs de recherche avancée  
Etape 10 : L’utilisateur sélectionne une recette  

### Scénarios Alternatifs :
Nous devons créer les scénarios suivants pour le prototype :

#### Scénario alternatif A1 : 
○ A1. Aucune recette correspondante à la recherche.   
L'enchaînement A1 commence au point 3 du scénario nominal     
○ 3. L’interface affiche « Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.  

#### Scénario alternatif A2 : 
○ A2. L’utilisateur commence sa recherche par un tag   
L'enchaînement A2 commence au point 1 du scénario nominal et reprend au point 9 du scénario nominal   
○ 1. L’utilisateur commence la recherche par un tag.   
○ 2. Les résultats de recherche sont actualisés, ainsi que les éléments disponibles dans les champs de recherche avancée (9 du cas principal)  

#### Scénario alternatif A3 : 
○ A3. L’utilisateur ajoute d’autres tags pour la recherche avancée   
L'enchaînement A3 commence au point 9 du scénario nominal.   
Cet enchaînement peut se répéter autant que nécessaire   
○ 10. L’utilisateur précise sa recherche grâce à l’un des champs : ingrédients, ustensiles, appareil.   
○ 11. Au fur et à mesure du remplissage les mots clés ne correspondant pas à la frappe dans le champ disparaissent   
○ 12. L’utilisateur choisit un mot clé dans le champ   
○ 13. Le mot clé apparaît sous forme de tag sous la recherche principale   
○ 14. Les résultats de recherche sont actualisés, ainsi que les éléments disponibles dans les champs de recherche avancée  

## Conditions de développement

Ces points doivent absolument être respectés durant le développement :

○ La recherche doit pouvoir se faire via le champ principal ou via les tags (ingrédients, ustensiles ou appareil)  
○ La recherche principale se lance à partir de 3 caractères entrés par l’utilisateur dans la barre de recherche  
○ La recherche s’actualise pour chaque nouveau caractère entré  
○ La recherche principale affiche les premiers résultats le plus rapidement possible  
○ Les champs ingrédients, ustensiles et appareil de la recherche avancée proposent seulement les éléments restant dans les recettes présentes sur la page  
○ Les retours de recherche doivent être une intersection des résultats. Si l’on ajoute les tags “coco” et “chocolat” dans les ingrédients, on doit récupérer les recettes qui ont à la fois de la coco et du chocolat.  
○ Comme pour le reste du site, le code HTML et CSS pour l’interface (avec ou sans Bootstrap) devra passer avec succès le validateur W3C.  
○ Aucune librairie ne sera utilisée pour le JavaScript du moteur de recherche  



