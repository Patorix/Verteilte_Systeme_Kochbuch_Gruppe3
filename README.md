# Verteilte_Systeme_Kochbuch_Gruppe3
# Beschreibung

APi für ein Kochbuch. Es werden mehrere Rezepte auf der Datenbank gespeichert. Man kann eine individuelle Suche nach Zutaten vornehmen und man kann sich die Nährwerte von den Gerichten zurückgeben lassen.

**Portfolioprüfung 2022**
**Sebastian Braun, Patrick Ochs und Daniel Volk**

Dozentin: Lisa Trovato-Monastra

# Endpoint 1

URL: /kochbuch/rezept/

Beispiel: /kochbuch/rezept/?rezept_id=0

Parameter: rezept_id (int) (GET)

Response-Type: application/json

Response-Content:
{
    "rezept": "Wiener Schnitzel"
    "dauer": "30 min"
    "zubereitung": "1. Schnitzel zwischen Frischhaltefolie behutsam klopfen. Fleisch beidseitig salzen, in Mehl wenden,abklopfen, durch die Eier ziehen und in den Bröseln wenden.
    2. Schnitzel ca. 2 Finger hoch Backfett goldgelb backen. Während des Backens die Pfanne ein wenig rütteln, damit die Schnitzel gleichmäßig goldbraun werden. Schnitzel herausheben, auf Küchenpapier abtropfen lassen.
    3. Zitrone in Spalten schneiden und die fertigen Wiener Schnitzel mit Zitronenspalten garnieren."
    "schwierigkeitsgrad": 2
}

Method (POST): rezept (string), dauer (string), zubereitung (string), schwierigkeitsgrad (int)

Response-Type: application/json

Response-Content:
"rezept_id": 10

# Endpoint 2

URL: /kochbuch/zutaten/

Beispiel: /kochbuch/zutaten/?r=Schnitzel

Parameter: r (string) (GET)

Response-Type: application/json

Response-Content:

{
"zutaten_2P": " 2  Stk	Kalbsschnitzel (à 160 g) 
            1/2	Prise	Salz
            75	g	griffiges Mehl
            1	Stk	Eier
            150	g	Semmelbrösel
            1/2	Pk	Backfett, Öl od. Butterschmalz
            1/2	Stk	Zitrone"

"zutaten_4P": " 4  Stk Kalbsschnitzel (à 160 g) 
            1	Prise	Salz
            150	g	griffiges Mehl
            2	Stk	Eier
            300	g	Semmelbrösel
            1   Pk	Backfett, Öl od. Butterschmalz
            1	Stk	Zitrone"
        
"zutaten_8P": " 8  Stk Kalbsschnitzel (à 160 g) 
            1	Prise	Salz
            300	g	griffiges Mehl
            4	Stk	Eier
            600	g	Semmelbrösel
            2   Pk	Backfett, Öl od. Butterschmalz
            2	Stk	Zitrone"
}

Method (POST): zutaten_2P (string[]), zutaten_4P (string[]), zutaten_8P (string[])

Response-Type: application/json

Response-Content:

"success":true 

# Endpoint 3

URL: /kochbuch/nährwerte/

Beispiel: /kochbuch/nährwerte/?r=Schnitzel

Parameter: r (string) (GET)

Response-Type: application/json

Response-Content:

"kalorien":         "521 kcal pro Portion"
"kohlenhydrate":    "66,12 g pro Portion"
"fett"              "7,93 g pro Portion"
"eiweiß"            "44,86 g pro Portion"

Method (POST): kalorien (string), kohlenhydrate (string), "fett" (string), eiweiß (string)

Response-Type: application/json

Response-Content:
"success":true

