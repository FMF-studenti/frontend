# Študentske strani FMF - Ember.js Frontend
[![Homepage][web-img]][web] [![Latest release][release-img]][release] [![License][license-img]][license]

This is a Ember.js powered web frontend for FMF.si, student community of Faculty of Mathematics and Physics, University of Ljubljana.


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/) (for testing)

[Django backend](https://github.com/FMF-studenti/backend) is currently required for development.


## Installation

* `git clone https://github.com/FMF-studenti/frontend.git`
* change into the new directory
* `npm install`
* `bower install`
* copy `sample.env` to `.env` and adapt to your local environment


## Running / Development

* `ember server`
* visit the frontend at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Deploying

* checkout latest tag/stable code on server
* check and update `Content-Security-Policy` headers (compare with development server)
* `ember build --environment production`


## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


## Copyright

Copyright (C) 2015 Tadej Novak

This project may be used under the terms of the GNU General Public License
version 2.0 (or later) as published by the Free Software Foundation and
appearing in the file LICENSE.

This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE. See the license for more details.


[web]: http://fmf.si
[release]: https://github.com/FMF-studenti/frontend/releases
[license]: https://github.com/FMF-studenti/frontend/blob/master/LICENSE

[web-img]: https://img.shields.io/badge/web-fmf.si-green.svg
[license-img]: https://img.shields.io/github/license/FMF-studenti/frontend.svg
[release-img]: https://img.shields.io/github/release/FMF-studenti/frontend.svg
