# Commit Message Formatter

Based on the best practices a good commit message looks like this:

- The first line is the subject of the commit message. It should be limited to 
  50 characters and should be separated from the body with a blank line.
- The message body should be wrapped at 72 characters.

The Commit Message Formatter wraps the commit message following these rules. 
It does not just break the long lines, but it can reformat the whole text after a modification.
It can also handle lists and indentations.

## Prerequisites

Before first use, setup GIT to use VSCode as the default editor:

```bash
git config --global core.editor "code --wait"
```

After installation it can be executed from the context menu with the
`Format document` command.

## Example

### Before

```
Ut vehicula eleifend massa, vitae interdum turpis maximus sit amet. Cras at nunc odio.

Pellentesque accumsan elit id convallis vulputate. Cras sapien felis, tincidunt finibus leo at, pharetra congue arcu.

  * Praesent dignissim odio non interdum cursus. Proin lorem mauris, feugiat et risus eu, sodales lacinia libero.
  * Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  * Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum non erat ac neque commodo convallis.

Praesent sed pellentesque quam. Vivamus et orci ut augue rutrum efficitur a in mi. Etiam sodales purus ac lectus interdum, nec dictum elit aliquet.
```

### After

```bash
# Subject line length (git.inputValidationSubjectLength)
# -----------------------------------------------|
#
# Input validation length (git.inputValidationLength)
# ---------------------------------------------------------------------|

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

TODO