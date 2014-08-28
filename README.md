react-cli
=========

## Installation

    npm install -g react-cli react

## Usage

    Usage: react-cli [source file]

    Options:

      -h, --help           output usage information
      -V, --version        output the version number
      -p, --props [props]  Props to pass into the component

## Examples

Without passing `props`:

    react-cli my-component.jsx


Passing `props`

    react-cli my-component.jsx -p "{\"foo\": \"bar\"}"
