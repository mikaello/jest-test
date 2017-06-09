# Jest tester

En bitteliten workshop med tema Jest-tester

Nyttige lenker for oppgavene:
* [Jest API globals](https://facebook.github.io/jest/docs/en/api.html#content) (f.eks. `describe()` og `test()`)
* [Jest API expect](https://facebook.github.io/jest/docs/en/expect.html) (f.eks. `toBe()` og `toEqual()`)

### Oppgave 1: Hvordan kjøre testene
Kjør testene som allerede er skrevet. Hint: `npm test`

### Oppgave 2: Skriv din egen enhetstest
Funksjonen `addTwoIntegers(number, number)` i fila `usitLogic.js` skal vistnok legge sammen to heltall, men dette er det ingen som vet helt sikkert. Åpne fila `__test__/oppgave2_usitLogic.test.js` og skriv ferdig testene som sjekker at denne faktisk legger sammen to heltall og får korrekt utputt.

Følg med i terminalvinduet som du brukte i _Oppgave 1_ for å se at testene kjører.


### Oppgave 3: TDD (Test Driven Development)

Gå inn i fila `__test__/oppgave3_usitLogic.test.js` og fjern `.skip` fra `describe`-funksjonen helt øverst. I terminalen kan du nå se at en del tester feiler.

Din jobb i denne oppgaven er å endre funksjonen `capitalizeUSIT(string)` i `usitLogic.js` slik at testene passerer. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Defining_the_regular_expression_in_replace()">Hint</a>


### Oppgave 4: Testing av redux reducer

I `__tests__/oppgave4_usitReducer.test.js` er det implementert en test av en av actionene i `usitReducer`, ta en rask titt på denne, og følg instruksjonene for å skrive en test av `'BLAME_CRACKER'`-actionen.


### Oppgave 5: Snapshot-testing

Det er på forhånd laget et snapshot av hele appen, dette kan du se i fila `__tests__/__snapshots__/oppgave5_appRendersCorrectly.js.snap` (dette lages automatisk når man kaller på metoden `toMatchSnapshot()` på returverdien fra et `expect()`-kall, se `__tests__/oppgave5_appRendersCorrectly.js`)

Gå nå inn i `App.js` og endre på teksten i overskriften til `ListOfCrackers`-komponenten (øverst). Se hvordan testene i terminalen oppfører seg nå, oppdater eventuelt snapshotet med en ny versjon.

I hvilke tilfeller kan slik snapshot-testing være nyttig?
