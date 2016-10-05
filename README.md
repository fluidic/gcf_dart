# Google Cloud Functions Dart example

# Code

Modify `bin/hello.dart` as you want.

You can access HTTP `path`, `headers` and `body` from the `args`. To return the response, print the response to stdout.

```dart
// import 'dart:convert';

main(List<String> args) async {
    // final path = args[0];
    // final headers = JSON.decode(args[1]);
    // final body = JSON.decode(args[2]);

    print('Hello Dart!');
}
```

# Prepare upload

`mk_upload.sh` scripts prepares the application in the `upload` directory.

```
./mk_upload.sh
```

# Deploy

Change the directory to `upload` and depoly.

```
gcloud alpha functions deploy helloGET --stage-bucket [YOUR_STAGING_BUCKET_NAME] --trigger-http
```

