# Dev Book Template

_Discussed in detail in my blog post: [Craft a Stylish and Practical Developer Book with this LaTeX Template](https://chrisfrew.in/blog/craft-a-stylish-and-practical-developer-book-with-this-latex-template/)_

## Prerequisites

You'll need to have the following libraries and packages installed:

- latex (`brew install --cask mactex`)
- ghostscript (`brew install ghostscript`)
- the Fira Code font (`brew install --cask font-fira-code`)

Raise an issue or make a pull request if I've forgotten anything!

## Emojis

Currently, emojis should work without any extra LaTeX configuration. You'll find in the `book.tex` file a fallback for emojis. By default, it is `AppleColorEmoji`, but if you are on Windows or Linux, you will need to use a different emoji font like `SegoeUIEmoji` or `NotoColorEmoji`.

## Build Book PDF

This script will build the book and merge it with the cover. It will output a file called `book.pdf` in the root of the project.

```shell
/bin/bash scripts/build-book.sh
``` 

This will build the cover and the book and merge them together into a single PDF.

## Cover

The `cover/` folder contains the `.tex` file where the cover page is built. Because I don't want to fight LaTeX, the cover is a completely separate latex file to the rest of the book. This can also be useful for physical prints, where the cover often has to be uploaded separately - at vendors like amazon, for example.

## Book

The `book/` folder contains the `.tex` file where you'll actually do the writing. It has many examples of everything you'd need to write a developer book.


## Listings or Index Missing

This is a caveat of LaTeX, it needs to build the document twice. Simply run `/bin/bash scripts/build-book.sh` again and the listings and so on should be properly listed.