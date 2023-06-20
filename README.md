# Commit Message Formatter

Breaks long lines in commit messages according to the [50/72 rule](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).
It can handle bullet points even if those are not separated by empty lines.

## Prerequisites

Before first use, setup GIT to use VSCode as the default editor:

```bash
git config --global core.editor "code --wait"
```

After installation it can be executed from the context menu with the
`Format document` command.

## Example

From this unformatted message:

```
Ut vehicula eleifend massa, vitae interdum turpis maximus sit amet. Cras at nunc odio.

Pellentesque accumsan elit id convallis vulputate. Cras sapien felis, tincidunt finibus leo at, pharetra congue arcu.

  * Praesent dignissim odio non interdum cursus. Proin lorem mauris, feugiat et risus eu, sodales lacinia libero.
  * Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  * Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum non erat ac neque commodo convallis.

Praesent sed pellentesque quam. Vivamus et orci ut augue rutrum efficitur a in mi. Etiam sodales purus ac lectus interdum, nec dictum elit aliquet.
```

become this:

```bash

Ut vehicula eleifend massa, vitae interdum turpis

maximus sit amet. Cras at nunc odio.

Pellentesque accumsan elit id convallis vulputate. Cras sapien felis,
tincidunt finibus leo at, pharetra congue arcu.

  * Praesent dignissim odio non interdum cursus. Proin lorem mauris,
    feugiat et risus eu, sodales lacinia libero.
  * Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  * Class aptent taciti sociosqu ad litora torquent per conubia nostra,
    per inceptos himenaeos. Vestibulum non erat ac neque commodo
    convallis.

Praesent sed pellentesque quam. Vivamus et orci ut augue rutrum
efficitur a in mi. Etiam sodales purus ac lectus interdum, nec dictum
elit aliquet.
```

## Options

The extension uses the `git.inputValidationSubjectLength` and the `git.inputValidationLength` 
options to define the maximum number of characters of the lines and the subject.

Other options are:

* `commit-message-formatter.subjectMode` - How to handle the subject line if it is longer than the allowed length.
* `commit-message-formatter.collapseMultipleEmptyLines` - Collapse multiple blank lines to single one.
* `commit-message-formatter.protectedPatterns` - Keep the line untouched, which begins with one of these patterns.