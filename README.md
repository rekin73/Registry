# Registry
   Main - ekran startowy, login, hasło
   Users - lista zarejestrowanych userów, użycie FlatList
   MyButton - własna klasa zastępująca button, użycie proptypes
   ListItem - element listy, w osobnym pliku
   EditUser - ekran z przesłanymi danymi jednego usera
   Settings - obiekt (nie klasa) z adresem i portem serwera, używany w wielu klasach

- używamy nawigacji createStackNavigator
- można zarejestrować usera na serwerze node (fetch), pod warunkiem że takiego nie ma (login)
- można pobrać zarejestrowanych userów (fetch) i wyświetlić ich w postaci listy z domyślnym obrazkiem 
- można usunąć usera (ekran pokazuje bieżącą listę userów)
- po kliknięciu elementu listy przenosimy się do ekranu pojedynczego usera
