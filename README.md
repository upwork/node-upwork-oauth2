Node.JS bindings for Upwork API (OAuth2)
===========

[![License](http://img.shields.io/packagist/l/upwork/php-upwork.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)
[![npm](https://img.shields.io/npm/v/node-upwork-oauth2.svg)](https://www.npmjs.com/package/node-upwork-oauth2)
[![GitHub release](https://img.shields.io/github/release/upwork/node-upwork-oauth2.svg)](https://github.com/upwork/node-upwork-oauth2/releases)
[![Build Status](https://travis-ci.org/upwork/node-upwork-oauth2.svg)](https://travis-ci.org/upwork/node-upwork-oauth2)

# Introduction
This project provides a set of resources of Upwork API from http://developers.upwork.com based on OAuth 2.0.

# Features
These are the supported API resources:

* My Info
* Custom Payments
* Hiring
* Job and Freelancer Profile
* Search Jobs and Freelancers
* Organization
* Messages
* Time and Financial Reporting
* Metadata
* Snapshot
* Team
* Work Diary
* Activities

# License

Copyright 2018 Upwork Corporation. All Rights Reserved.

node-upwork is licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## SLA
The usage of this API is ruled by the Terms of Use at:

    https://developers.upwork.com/api-tos.html

# Application Integration
To integrate this library you need to have:

* Node.JS >= 4
* npm >= 3.5.0

## Example
In addition to this, a full example is available in the `example` directory. 
This includes `example.js` that gets an access token and requests the data
for applications that are not web-based.
It also describes how to use your own client together with this Upwork library.

## Installation

To install the library please run the following command:

    $ npm install node-upwork-oauth2

## Quick start

Before you start using Upwork API, you will need to obtain your pair of API keys.
Visit the `Upwork API documentation Center <https://developers.upwork.com/#authentication_oauth-20>`_
for full details.

1. `example/example.js` to `myapp.js`
2. open `myapp.js` and type the clientId (a.k.a. consumer key), clientSecret (a.k.a. client secret) and `redirectUri` that you previously got from the API Center.

***That's all. Run your app as `node myapp.js` and have fun.***

## Documentation

Please use YUIDoc to build the local copy of the documentation or use http://upwork.github.io/node-upwork/.
