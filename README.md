# John Conway's "Game of Life"! 
[Wikipedia Page](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns)
This is a computer science classic from 1970, 
a program that simulates a _cellular automaton_ (plural _automata_).
![example-patterns](https://media.giphy.com/media/4VVZTvTqzRR0BUwNIH/giphy.gif)


## Features

(Done) Grid to display cells. 

(Done) Cell objects or components that, at a minimum, should have:
    * state: (alive, dead), (black, white)
    * Clickable/Tappable:
      * can be clicked to allow user to setup initial cell configuration
      * should NOT be clickable while simulation is running
    * Behaviors
      * Toggle state functionality: 
        switch between alive & dead either because user manually toggled cell before starting simulation, 
        or simulation is running and rules of life caused cell to change state

(Done) An appropriate data structure to hold a grid of cells that is at least 25x25.

(Done) Text to display current generation # being displayed

(Done) Utilize a timeout function to build the next generation of cells & update the display at the chosen time interval

(Done) Button(s) that start & stop the animation

(Done) Button to clear the grid

Write an algorithm that:

(Done) Implements the following basic steps:
  For each cell in the current generation's grid:
    1. Examine state of all eight neighbors 
      (it's up to you whether you want cells to wrap around the grid and consider cells on the other side or not)
    2. Apply rules of life to determine if this cell will change states
    3. When main loop completes:
       1. Swap current and next grids
       2. Repeat until simulation stopped

(Done) Breaks down above steps into appropriate sub-tasks implemented with helper functions to improve readability

(Done) Uses double buffering to update grid with next generation.

(Done) Does something well-documented with the edge of the grid.

(Done) On the main entry point of the application, include a separate section, or link to another page or popup that describes the two main rules (birth & death) of Conway’s Game of Life


## Custom Features

Implement at least 3 of the following features:

* Create a few sample cell configurations that users can load and run

(Done) Add an option that creates a random cell configuration that users can run

* Add additional cell properties, like color or size, and incorporate them into your visualization

(Done) Allow users to specify the speed of the simulation

(Done) Provide functionality to manually step through the simulation one generation at a time, as opposed to animating automatically

* Allow users to change the dimension of the grid being displayed

* Given a specific generation, calculate the configuration of cells at that point in time, 
  and jump to that state, bypassing (i.e. skip ahead _n_ generations).


## Stretch Goals

**Your simulation will receive a 3 when it satisfies all requirements AND implements a stretch goal**

* Implement 2+ additional custom features

(Done) Deploy your app to a hosting service

* Write a how-to guide or blog post that walks readers through the work you did to implement your project

* Expand your simulation into the third dimension. Google `3D Conways Life`.

* Explore alternate algorithms for finding the nth generation, such as [Hashlife](https://en.wikipedia.org/wiki/Hashlife)


## Repo

(Done) Well-organized directories.

(Done) Good file names that let a reader quickly determine which file is where.

* Good `README.md` files that help the reader with code navigation and installation.
  * What is the project?
  * What problem does it solve?
  * Exceptional difficulties and solutions, if any.
  * TODO list/wishlist. What do you want to add to it if you have more time?


## Rubric

**Your simulation will receive a 2 when it satisfies the following:**

(Done) Display includes a text area that shows the current generation of cells being displayed

(Done) Display includes a grid of cells, at least 25x25, that can be toggled to be _alive_ or _dead_

* Display includes working buttons that start / stop the animation and clear the grid

(Done) Algorithm to generate new generations of cells correctly implemented

* At least 3 features from ***Custom Features*** section successfully implemented

* Application includes a section outlining the rules to Conway's "Game of Life"

