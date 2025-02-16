React Native Test app

# Get started

#### Set up .env file
```sh
cp .env.example .env
```

Add your firebase credentials

#### Start
```sh
npm run start
```

### How to reproduce

1) Create account if you don't already have one
1) Login and notice user is logged out in the home screen
1) Refresh the app
1) Notice the user is now null and no longer logged in

#### Expected behaviour:
After refreshing the app, user should still be logged in and we should still see the user details shown on the home screen