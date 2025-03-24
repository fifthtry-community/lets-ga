# `lets-ga` - Google Analytics for fastn websites

## Developer Setup

Install `fastn`. For Mac/Linux:

```sh
source <(curl -fsSL https://fastn.com/install.sh)
```

For Windows or for other installation methods checkout [fastn.com/install/][1].

[1]: https://fastn.com/install/

Git clone this repository:

```sh
git clone https://github.com/fifthtry-community/lets-ga.git  
# or if you have ssh setup
git clone git@github.com:fifthtry-community/lets-ga.git 
```

### Use `auto.sh`

This repo comes with `scripts/auto.sh`, that you can source from your shell:

```shell
source scripts/auto.sh
```

Once done, you will have a few commands available.

### `run-ui`

This is what you want to run when you are building the UI of the `lets-ga`
app.

Note: call `update-ui` if you modify dependencies in 
`lets-ga.fifthtry.site/FASTN.ftd`, and during the initial setup.

```sh
update-ui  # only run this when modifying dependencies and during initial setup
run-ui
```

Once you run it, it will start `fastn` server on 8002, so you can visit
`http://127.0.0.1:8002/storybook/` to see various UI states. 

You can find the code of the UI in `lets-ga.fifthtry.site/ui` folder, and
the storybook configuration in `lets-ga.fifthtry.site/ui/storybook` folder.

### `run-template`

You want to run this when you want to test the end to end backend functionality
of `lets-ga` app. This also has a corresponding `update-template` command
which should be used when you modify dependencies or when setting up for the
first time.

Template code is in `lets-ga-template.fifthtry.site`.

### `run-www`

Use this (and `update-www`) when you want to test the `lets-ga` apps public
website, which is stored in `lets-ga.fifthtry-community.com` folder.


## Licence

This repo is MIT Licensed. See [LICENSE](LICENSE) for more details.
