# Modding+

## How does it work?

A JavaScript object is pre-written with all the functions we wish to add. As soon as a game instance is launched, it is joined with the `game`, every ship and alien objects using JavaScript's `Object.assign`.

## Administrative tools

### game.kick(identifier)

`identifier` is either the index of the ship (number) or the name of the ship (string). Names are not case sensitive.

Will display the game over screen for the target player, kicking them out of the game.

### game.kill(identifier)

Same thing but it kills the target player, letting them still respawn.

### game.instructorBroadcast(message, _instructor, _delay)

Broadcasts a message to all players in the game using the instructor dialog. `_instructor` is optional, must be a string of either: `Lucina`, `Klaus`, `Maria`, `Kan`, `Zoltar`. Defaults to `Lucina`. Delay is an optional number that specifies after how many ticks the instructor dialog will close. Defaults to `120` (2 seconds). 

**Warning: breaks when you broadcast 2 messages at the same time**
## Ship extended options

|Option|Description|
|-|-|
|ship.invulnerable(tick)|set `tick` ticks of invulnerability to `ship`|
|ship.angle(angle)|Changes the direction the ship is facing|
|ship.kill()|Kill the ship, letting they still respawn|

## Alien extended options

|Option|Alien set value|
|-|-|
|alien.shield(shield)|Shield|
|alien.regen(regen)|Shield regen|
|alien.damage(damage)|Laser damage|
|alien.laser_speed(speed) or alien.laserSpeed(speed)|Laser speed|
|alien.rate(rate)|Firing rate|
|alien.kill()|Destroy the alien|

## Programming Tools

### game.print(item), game.echo(item), game.log(item)
Wrapper for `game.modding.terminal.echo`. Modding equivalent of the `console.log` function.

### game.error(message)
Same thing as `game.print` except it's colored differently.

### game.setInterval(function, delay)

`function` is the function you wish the execute every `delay` ticks in the game. Remember that normally there are 60 in-game ticks per-second. Returns the interval index.

### game.clearInterval(index)

Clears the selected interval.

### game.setTimeout(function, delay)

Executes function `function` after `delay` ticks.

