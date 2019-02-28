# customer-service-utility
### Opis
* NaN oznacza, że data została wprowadzona w złym formacie (lub nic nie wpisano).
* Jeżeli minęło 90 dni od daty transakcji, liczba pozostałych dni będzie ujemna.
* Skryp zawsze liczy czas od wpisanej daty do aktualnej daty (wyświetlanej w skrypcie)
* Skrypt akceptuje dwa formaty:
  * D.MM.YYYY (format daty w adminie "Wygrał"),
  * DD.MM.YYYY
  * YYYY-MM-DD (format natywny dla skryptu).
* Skrypt korzysta z bibliotek moment.js (https://momentjs.com/).

### Znane błędy
* na razie brak

### Propozycje zmian
* na razie brak

### Zmiany w wersji
W wersji 1.1
* dodano funkcję zmieniającą format z D.MM.YYYY na 0D.MM.YYYY w przypadku D < 10
* rozszerzono informacje o możliwych formatach dat
