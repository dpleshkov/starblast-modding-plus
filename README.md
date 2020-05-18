# Modding+

Modding+ is a WIP extension to the default modding engine for Starblast. 

<details>
  <summary markdown="span">Table of contents</summary>
     
  **[How to use](#how-to-use)**
  
  <details>
    <summary markdown="span">Contents</summary>
 
   * **[Method 1: Background initialization](#method-1-background-initialization)**
    
   * **[Method 2: Template Mod](#method-2-template-mod)**
   
  </details>
  
  **[Documentation](#documentation)**
   
  **[How to contribute](#how-to-contribute)**
  
  **[Still confused?](#still-confused)**
</details>

## How to use

There 2 methods available:

### Method 1: Background initialization

#### Step 1: Initialize

Copy the code below and paste at the end of your current modding code. [See the file](/init.js)
```js
$.ajax("https://raw.githubusercontent.com/dpleshkov/starblast-modding-plus/master/config.js")
.done(function (data) {
  eval(data);
})
.fail(function (e) {
  game.modding.terminal.error("An error occured while loading the Modding+ extensions!");
});
```
![Test Run](https://raw.githubusercontent.com/Bhpsngum/img-src/master/TestRunModdingPlus.PNG)
#### Step 2: Check for errors

Type `start` in the modding console to run your mod.

if you get the error below:

![Error 1](https://raw.githubusercontent.com/Bhpsngum/img-src/master/ModdingPlusError1.png)

Try these action below + running the mod again after each try (from the top to bottom):
* Reload the Modding
* Empty-cache and Hard-reload the Modding:
  * **Firefox / Safari:** Hold Shift while clicking Reload, or press either Ctrl-F5 or Ctrl-R (⌘-R on a Mac)
  * **Google Chrome:** Press Ctrl-Shift-R (⌘-Shift-R on a Mac)
  * **Internet Explorer:** Hold Ctrl while clicking Refresh, or press Ctrl-F5
  * **Opera:** Go to Menu → Settings (Opera → Preferences on a Mac) and then to Privacy & security → Clear browsing data → Cached images and files.
* Relaunch your browser
* Restart your device

If the errors still occur, [contact me](#still-confused) to report the problem.

Or if you get the error below:

![Error 2](https://raw.githubusercontent.com/Bhpsngum/img-src/master/ModdingPlusError2.png)

[Contact me](#still-confused) as soon as possible as this error was caused by our resources, which will affect all users.

If you're still getting problems, consider using [method 2](#method-2-template-mod) instead.

If the terminal shows the result like the this:

![Success](https://raw.githubusercontent.com/Bhpsngum/img-src/master/ModdingPlusSuccess.PNG)

Then it works.

#### Pros
* Automatically updates when new features are available.
* Short and concise.
#### Cons
* Sometimes fails to work due to CORS policies.

If this method fails to work or you want to import the mod code manually, then do this:

### Method 2: Template Mod

#### Initialize
Open up the [`main.js`](/main.js) file, use the code in there as a starting template for your next mod.
#### Pros
* No CORS problems
#### Cons
* Cannot be automatically updated when new features are available
* Too long to implement
* Can cause problems if not implemented correctly

## Documentation

For more instructions and information, see the [documentation](/docs.md).

## How to contribute

[Fork this repo](https://github.com/dpleshkov/starblast-modding-plus/fork), add your changes, then make a [pull request](https://github.com/dpleshkov/starblast-modding-plus/pulls).


## Still confused?

DM `Dank Dmitron#4593` on Discord, or ping me on the official Discord.
