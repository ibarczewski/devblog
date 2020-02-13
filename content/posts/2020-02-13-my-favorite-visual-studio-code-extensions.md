---
template: post
title: 'My Visual Studio Code Setup, or: What Obsession With Extensions Looks Like'
slug: my_visual_studio_code_setup
draft: false
date: 2020-02-12T19:23:06.032Z
description: >-
  Visual Studio Code grants developers direct access to the dark arts. Let's use
  them. This is my list of extensions, along with a few theme choices I've made
  to make Visual Studio Code a more pleasant visual experience.
category: code
tags:
  - visual studio code
---
One of the things people bring up when working on my Visual Studio Code instance is the sheer amount of extensions I have installed. I'm overly obsessed with extensions. They make my development life a lot easier and have enhanced my productivity in countless ways. One might call me an extension enthusiast. Sure, great. That's fine.

I started a Slack channel at work to talk about VS Code extensions. As I started typing out what I had, I realized that I would probably be better off writing out an entire blog post. 

Anyways, here's the list of my extensions that I use often. My development life is far better because of these extensions, and I am endlessly grateful to the developers who created these.

## Prettier

One of the best libraries out there, Prettier takes an opinionated approach into reformatting your code to conform to a style. No more arguments and debates about styles, no need to make a style guide. Prettier enforces a style.

The Visual Studio Code extension does the enforcement of these styles on the fly when you save. Great so that you can see the changes live instead of/before you've ran Prettier in the terminal or as part of a commit hook.

![](/media/prettier.gif)

## Project Manager

I'm in love with Project Manager. I use my work laptop for side projects as well as client work, so I often have to bounce back and forth between the two. Project Manager allows me to define where projects are located, and then jump to that project simply by going to the sidebar and selecting it. Plus, it has excellent git integration, so I can jump from repo to repo. Cannot live without this extension to keep all of my Github graveyard side projects organized.

![](/media/projectmanager.gif)

## Bookmarks

If Project Manager is the organizer of all of my projects, Bookmarks is the organizer of spots in the code that I am jumping between. You select a line, bookmark it, and then jump back and forth between bookmarks by either using the sidebar or using shortcuts. Excellent when you want to keep a list of things you know you need to change. 

![](/media/bookmarks.png)

## GitLens

GitLens has a ton of really incredible features that are not able to be captured in a single photo, such as seeing the author name on top of code blocks, being able to hover over areas to see what the last change made was along with the commit message, being able to explore git repositories with full scale file and line histories. 

However, I really love the simple in-line author name and time of commit shown on the side of the code you're looking at. I have used this a ton to be able to immediately track down who I need to talk to when needing additional context. Brilliant tool and much more robust than Visual Studio Code's git integration.

![](/media/gitlengs.png)

## ES7 Snippets

Probably the most popular extension on here, this happens to be the one that I know I am not taking advantage of more. The parts of it I do use, however, are invaluable. Using usually a set of three to four letters, you can drop in a template of code, such as a React component, and save time typing out the entire component.

![](/media/snippet.gif)

## ESLint

In the same way that the Prettier extension will clean up your code using the Prettier library, ESLint will lint your code using your preferred ESLint configuration on the fly. If you disable the auto fix setting, ESLint will instead highlight the code that trips up your linting rules and put an overlay over the code when hovering, explaining what lint rule you're violating. Very useful to cut down on linting errors before running your code through a pre-commit linter hook.

![](/media/screen-shot-2020-02-12-at-9.51.52-pm.png)

## Import Cost

Simple - see the sizes of the packages you're importing, along with color customizations for when an imported package reaches a size threshold (which is also configurable!) Really useful when you're working on a project that requires tight size requirements.

*Note: I have heard that people have had issues with this extension not working/hanging in a calculation loop, so your mileage may vary. I personally have never had an issue with it.*

![](/media/importcost.jpg)

## indent-rainbow

When you are working in any language that relies on tabbing syntactically, this is a godsend. This will show which level every line is on through alternating coloring.

![](/media/indent-rainbow.png)

## Bracket Pair Colorizer 2

One of my favorite extensions ever, Bracket Pair Colorizer 2 changes the colors of every bracket to match its respective closing bracket. Ever get lost looking for the proper closing bracket? Bracket Pair Colorizer 2 is here to save you. I love this extension so much. It's incredibly useful and looks gorgeous.

*Note: make sure to download BPC 2 and not the original. BPC 2 introduced fixes that greatly optimized the performance of the extension.*

![](/media/bpc.png)

## Javascript Console Utils

Coming in with barely over 50k downloads on the Visual Studio Code Marketplace, I am surprised that this one does not have more traction in the community. Highlight a variable, press ⌘+Shift+L, and a new line will be introduced above the code, console logging said variable. Once you're done, ⌘+Shift+D will remove all of the console.log calls from the document. Excellent little plugin for getting console logs in place fast.

![](/media/consolelog.gif)

## Settings Sync

While I can't use a screenshot for this, the name of the extension should be pretty clear. By connection your GitHub account, you can sync your Visual Studio Code settings to the account and then auto upload/download all of the changes as they occur. You can share the gist that is generated to other users as well so that they can sync your changes to their machine. 

## Toggle Quotes

Super simple, super useful. Use ⌘ + ' (Ctrl + ' if on Windows) to cycle the quotes surround a string between ', ", and `. Handy little shortcut.

![](/media/togglequotes.gif)

## Regex Previewer

Using a keyboard shortcut, Regex Previewer will open up a side window and highlight the matches against the current expression that you are highlighted on. I don't use this a ton, but it is extremely helpful when I need to write quick and dirty Regex.

![](/media/regex.gif)

## Quokka

Quokka RULES. No longer do you need to go to the Chrome Dev Tools console or CodePen to write out a quick and dirty idea. Open up the command prompt, select "Quokka: New JavaScript File," and you have a fully functional Dev Tool console clone. Quokka executes immediately with each keystroke, while simultaneously showing in-line evaluations of the code. It will even execute pre-existing files! I love, love, love Quokka.

![](/media/quokka.gif)

## Themes:
## vscode-icons

I actually downloaded this today! I love having those icons on the side. Makes Visual Studio Code *pretty*.

![](/media/screenshot.gif)

## Night Owl

The best color theme I've ever used. Just perfect.

![](/media/nightowl.jpg)

I love tinkering with Visual Studio Code a lot, clearly. 

I'll be updating this post as I add more extensions and themes. I'm really excited to see how people continue to evolve what is, in my opinion, the best free code editor on the market. Hopefully some of these help you as much as they have helped me.
