const GameExtender = {
    timers: new Set(),
    intervals: [],
    print: function(item) {
        this.modding.terminal.echo(item);
    },
    error: function(item) {
        this.modding.terminal.error.echo(item);
    },
    kick: function(identifier) {
        let ship = this.locateShip(identifier);
        return ship.gameover({
            "Status": "Kicked by operator",
            "Score": ship.score
        });
    },
    kill: function(identifier) {
        let ship = this.locateShip(identifier);
        return ship.set({
            kill: true
        });
    },
    locateShip: function(identifier) {
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
    setTimeout: function(func, ticks) {
        let currentTick = this.step;
        this.timers.add([func, currentTick+ticks, this]);
    },
    setInterval: function(func, ticks) {
        let currentTick = this.step;
        return this.intervals.push([func, ticks]) - 1;
    },
    clearInterval: function(index) {
        this.intervals.splice(index, 1);
    },
    checkForTimers: function() {
        this.timers.forEach(function(timer) {
            let game = timer[2];
            if (game.step >= timer[1]) {
                timer[0]();
                game.timers.delete(timer);
            }
        })
    },
    checkForIntervals: function() {
        this.intervals.forEach(function(interval) {
            if (game.step % interval[1] == 0) {
                interval[0]();
            }
        })
    },
    updateShips: function(isEvent) {
        if (!isEvent)
            for (let ship of this.ships) ship.highscore= Math.max(ship.highscore||0,ship.score);
        else
            switch(event.name||"")
            {
                case "ship_destroyed":
                    if (event.killer != null) event.killer.frag=(event.killer.frag||0)+1;
                    if (event.ship != null) event.ship.death=(event.ship.death||0)+1;
            }
    }
}
var _initialized = false;

this.options = {
};

this.tick = function(game) {
    if (!_initialized) {
        Object.assign(game, GameExtender);
        _initialized = true;
    }
    game.updateShips();
    game.checkForTimers();
    game.checkForIntervals();
}
this.event = function (event,game) {
    game.updateShips(event);
    // Place your event handler code here
}
