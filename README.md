# Commit Message Formatter

Wrap long lines in commit messages.

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