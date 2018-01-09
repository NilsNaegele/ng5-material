// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCgTxro_irm16hAMIzX6ej_IZoXGKgHje8',
    authDomain: 'ng5-material.firebaseapp.com',
    databaseURL: 'https://ng5-material.firebaseio.com',
    projectId: 'ng5-material',
    storageBucket: 'ng5-material.appspot.com',
    messagingSenderId: '45511111933'
  }
};
