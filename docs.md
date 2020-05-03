# Modding+

## How does it work?

A JavaScript object is pre-written with all the functions we wish to add. As soon as a game instance is launched, it is joined with the `game` object using JavaScript's `Object.assign`.

## Administrative tools

### game.kick(identifier)

`identifier` is either the index of the ship (number) or the name of the ship (string). Names are not case sensitive.

Will display the game over screen for the target player, kicking them out of the game.

### game.kill(identifier)

Same thing but it kills the target player, letting them still respawn.

## Programming Tools

### game.print(item)
Wrapper for `game.modding.terminal.echo`. Modding equivalent of the `console.log` function.

### game.setInterval(function, delay)

`function` is the function you wish the execute every `delay` ticks in the game. Remember that normally there are 60 in-game ticks per-second. Returns the interval index.

### game.clearInterval(index)

Clears the selected interval.

### game.setTimeout(function, delay)

Executes function `function` after `delay` ticks.

