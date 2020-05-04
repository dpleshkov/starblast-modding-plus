const GameExtender = {
    timers: new Set(),
    intervals: [],
    print: function (item) {
        this.modding.terminal.echo(item);
    },
    echo: function (item) {
        this.print(item);
    },
    log: function (item) {
        this.print(item);
    },
    error: function (item) {
        this.modding.terminal.error(item);
    },
    kick: function (identifier) {
        let ship = this.locateShip(identifier);
        return ship.gameover({
            "Status": "Kicked by operator",
            "Score": ship.score,
            "High score": ship.highscore,
            "Frags": ship.frag,
            "Deaths": ship.death
        });
    },
    kill: function (identifier) {
        let ship = this.locateShip(identifier);
        return ship.set({
            kill: true
        });
    },
    locateShip: function (identifier) {
        if (typeof identifier == "number") {
            return this.ships[identifier];
        }
        let searchQuery = identifier.toLowerCase();
        for (let shipIndex in this.ships) {
            let ship = this.ships[shipIndex];
            let shipName = ship.name.toLowerCase();
            if (shipName.includes(searchQuery)) {
                return ship;
            }
        }
        return -1;
    },
    setTimeout: function (func, ticks) {
        let currentTick = this.step;
        this.timers.add([func, currentTick + ticks, this]);
    },
    setInterval: function (func, ticks) {
        let currentTick = this.step;
        return this.intervals.push([func, ticks]) - 1;
    },
    clearInterval: function (index) {
        this.intervals.splice(index, 1);
    },
    checkForTimers: function () {
        this.timers.forEach(function (timer) {
            let game = timer[2];
            if (game.step >= timer[1]) {
                timer[0]();
                game.timers.delete(timer);
            }
        })
    },
    checkForIntervals: function () {
        this.intervals.forEach(function (interval) {
            if (game.step % interval[1] === 0) {
                interval[0]();
            }
        })
    },
    updateShips: function (event) {
        if (!event)
            this.ships.forEach(function (ship) {
                ship.highscore = Math.max(ship.highscore || 0, ship.score);
                if (Object.is(ship.death)) ship.death = 0;
                if (Object.is(ship.frag)) ship.frag = 0;
            })
        else
            switch (event.name || "") {
                case "ship_destroyed":
                    if (!Object.is(event.killer, null)) event.killer.frag++;
                    if (!Object.is(event.ship, null)) event.ship.death++;
                    break;
            }
    }
}

var _initialized = false;

this.options = {
    // see documentation for options reference
}

this.tick = function (game) {
    if (!_initialized) {
        Object.assign(game, GameExtender);
        _initialized = true;
    }
    game.updateShips();
    game.checkForTimers();
    game.checkForIntervals();
    // Place your tick function here
}

this.event = function (event, game) {
    game.updateShips(event);
    // Place your event handler code here
}
