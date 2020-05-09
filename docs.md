# Modding+

## How does it work?

![Modding Plus Tree](https://raw.githubusercontent.com/Bhpsngum/img-src/master/ModdingPlusTree.png)

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

### game.emptyWeapons()

Empty all weapon slots from all players in the game.

## Extended ship options

|Option|Type|Description|
|-|-|-|
|ship.invulnerable(tick)|Function|Set `tick` ticks of invulnerability to `ship`|
|ship.angle(angle)|Function|Changes the direction the ship is facing|
|ship.kill()|Function|Kill the ship, letting they still respawn|
|ship.frag|Value|Ship's current frags (doesn't include alien kills)|
|ship.death|Value|Ship's current deaths|
|ship.highscore|Value|Ship's high score|

## Alien extended options

|Option|Alien set value|
|-|-|
|alien.shield(shield)|Shield|
|alien.regen(regen)|Shield regen|
|alien.damage(damage)|Laser damage|
|alien.laser_speed(speed) or alien.laserSpeed(speed)|Laser speed|
|alien.rate(rate)|Firing rate|
|alien.kill()|Destroy the alien|

**Note:** Both alien and ship extended options can be "chained" (execute other functions right after the previous functions)

This excluded `alien.kill()` because once killed, aliens cannot respawn anymore.

For example:
```js
game.ships[0].angle(15).invulnerable(120).kill()
game.aliens[0].rate(10).laser_speed(10).damage(10).shield(100).regen(20)
```

## Debugging Tools

### showtick (terminal command)

To enable/disable auto tick-logging in the console

Syntax: `> showtick <true/false> (omit to view the current stats)`

For example:
```
> showtick
Automatic tick logging is disabled
> showtick true
Automatic tick logging is enabled
Tick CPU time: average 0 ms ; max 4 ms
Data sent: 0 bytes per second
> showtick false
Automatic tick logging is disabled
> █
```


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


