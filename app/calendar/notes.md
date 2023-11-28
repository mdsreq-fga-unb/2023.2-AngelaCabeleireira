notes.txt

Serviços-
css: transition após escolha do serviço. Rollback(?)
height and width responsive(?). At least working
Calendario-
css: transition após escolha do dia. Rollback(?)
height and width responsive(?). At least working. Change or use bootstrap style effectively. It needs to fit the figma prototype, the colors and shapes.

TimeBox-
css: scrollpanel para horários, estilizar apenas uma colunas, alargar o card, etc

When transition is being handled, check to see if there is enough data to continue

Change the time at which the components are rendered. The page is a little slow
First the services. Once chosen, render the calendar, then accept rollback and wait for a date to be chosen. Once the date is chosen, accept rollback and render the time-boxes. When all items are selected, prompt the user with a "do you confirm this request" screen, then you're free to send it to the event_handler api
