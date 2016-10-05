#!/bin/bash

rm -rf upload
mkdir upload
dart --snapshot=hello.dart.snapshot bin/hello.dart
mv hello.dart.snapshot upload
cp -R third_party upload
cp function/index.js upload
