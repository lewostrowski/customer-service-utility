# customer-service-utility
### Opis
* NaN oznacza, że data została wprowadzona w złym formacie (lub nic nie wpisano).
* Jeżeli minęło 90 dni od daty transakcji, liczba pozostałych dni będzie ujemna.
* Skryp zawsze liczy czas od wpisanej daty do aktualnej daty (wyświetlanej w skrypcie)
* Skrypt akceptuje dwa formaty:
  * DD.MM.YYYY (format daty w adminie "Wygrał"),
  * YYYY-MM-DD (format natywny dla skryptu).
* Skrypt korzysta z bibliotek moment.js (https://momentjs.com/).

### Znane błędy
* data admina to format D.MM.YYYY nie DD.MM.YYYY; skrypt nie wyrzuca błędu, ale w pewnym momencie może zacząć

### Propozycje zmian
* na razie brak
