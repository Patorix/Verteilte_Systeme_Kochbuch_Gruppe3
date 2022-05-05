# Verteilte_Systeme_Kochbuch_Gruppe3
# Beschreibung

APi für ein Kochbuch. Es werden mehrere Rezepte auf der Datenbank gespeichert. Man kann eine individuelle Suche nach Zutaten vornehmen und man kann sich die Nährwerte von den Gerichten zurückgeben lassen.

**Portfolioprüfung 2022**
**Sebastian Braun, Patrick Ochs und Daniel Volk**

Dozentin: Lisa Trovato-Monastra

**WICHTIG:**  Wir haben dieses Projekt wie in der Aufgabe gefordert zusammen erledigt und alles gemeinsam von einem Rechner bearbeitet.

# Prüfungsfragen

1. Beschreibt ein konkretes Anwendungsszenario für den entwickelten Service und schildert (in wenigen Worten) eine mögliche Gesamt-Architektur in welcher sich dieser befinden könnte.

Der Benutzer kann mit unserem entwickelten Service verschiedende Kochrezepte mit der enstsprechenden Zubereitung ansehen. Darüber hinaus kann sich der Benutzer auch die Nährwerte und Zutaten des Gerichtes anzeigen lassen, sowie den jeweiligen Schwierigkeitsgrad und die Zubereitungsdauer. Damit findet jeder das passende Rezept für seinen Geschmack und Kochskills und hat gleichzeitg noch die Nährwerte und Kalorien im Blick.

Gesamtarchitektur:

1.1 Der Benutzer stellt eine Anfrage für ein Rezept, Zutaten oder Nährwerte (get) 
1.2 Der Administrator kann Einträge bearbeiten, löschen oder neu hinzufügen (post, put und delete)
2.1 Die Rest-API gibt die angefragten Daten zurück falls der Aufruf richtig war, andernsfalls wird ein Fehlrer zurückgegeben.

2. Welche Probleme können entstehen, wenn der entwickelte Service von mehreren Parteien verwendet wird? Beschreibt zwei Probleme sowie mögliche Lösungen.

Problem 1: Wenn man versucht mehrere Daten gleichzeitug einzupflegen, kann es dazu führen, dass die Datenbank nicht alle Anfragen bearbeiten kann. Dadurch kann es passieren, dass nicht alle Daten die eingepflegt werden sollten auch in der Datenbank vorhanden sind. 
Lösung: Es sollte nur eine Person zur gleichen Zeit Daten einpflegen, damit es nicht zu diesem geschilderten Problem kommt.

Problem 2: Es könnte zu einer Überlastung der Datenbank durch eine hohe Anzahl an Aufrufen kommen. Dadurch kann die Datenbank diese Aufrufe nicht mehr verarbeiten und im schlimmsten Fall könnte es dazu kommen, dass diese Abstürzt.
Lösung: Anzahl der gleichzeitigen Aufrufe zu beschränken, um dieses aufgeführte Problem zu vermeiden.


3. Was ist abseits der reinen Programmierung für die Produktivsetzung des entwickelten Services zu beachten? Nenne mindestens zwei Aspekte und führe diese in ein paar Sätzen aus.

Das Programm sollte im Vorfeld ausreichend getestet sein, sodass mögliche Fehler frühzeitig erkannt werden und das Programm voll funktionsfähig ist. Zum Beispiel durch das Testen aller Requests um die funktionsfähigkeit dieser zu prüfen. Ebenso sollten auch falsche Eingaben getestet werden.
Zudem sollte das Systemumfeld, also Speicherkapazität, Rechenleistung etc., ebenfalls getestet und funktionsfähig sein und dazu in der Lage sein alle Aufrufe zu verarbeiten.

