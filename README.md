# Dev Book Template

## Prerequisites

You'll need to have the following libraries and packages installed:

- latex (`brew install --cask mactex`)
- ghostscript (`brew install ghostscript`)

Raise an issue or make a pull request if I've forgotten anything!

## Build Book PDF

This script will build the book and merge it with the cover. It will output a file called `book.pdf` in the root of the project.

```shell
/bin/bash scripts/build-book.sh
``` 

This will build the cover and the book and merge them together into a single PDF.

## Cover

The `cover/` folder contains the `.text` file where the cover page is built. Because I don't want to fight LaTeX, the cover is a completely separate latex file to the rest of the book. This can also be useful for physical prints, where the cover often has to be uploaded separately - at vendors like amazon, for example.

## Book

The `book/` folder contains the `.tex` file where you'll actually do the writing. It has many examples of everything you'd need to write a developer book.
