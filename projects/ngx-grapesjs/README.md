<h1 align="center">Welcome to ngx-grapesjs 👋</h1>
<p>
  <a href="https://github.com/Developer-Plexscape/ngx-grapesjs#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/Developer-Plexscape/ngx-grapesjs/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://twitter.com/plexearth" target="_blank">
    <img alt="Twitter: plexearth" src="https://img.shields.io/twitter/follow/plexearth.svg?style=social" />
  </a>
</p>

> Angular wrapper library for GrapesJS

### 🏠 [Homepage](https://github.com/Developer-Plexscape/ngx-grapesjs#readme)

## Install

- Install the **GrapesJS** library and its newsletter preset

```sh
  npm install grapesjs grapesjs-preset-newsletter
```

- Install **ngx-grapesjs**

```sh
  npm install @developer-plexscape/ngx-grapesjs
```

- Add GrapesJS scripts and styles in the `angular.json` file of your Angular workspace:

```json
 "styles": [
    "node_modules/grapesjs/dist/css/grapes.min.css",
    "node_modules/grapesjs-preset-newsletter/dist/grapesjs-preset-newsletter.css"
  ],
  "scripts": [
    "node_modules/grapesjs/dist/grapes.min.js",
    "node_modules/grapesjs-preset-newsletter/dist/grapesjs-preset-newsletter.min.js"
  ]
```

## Usage

 1. Import `NgxGrapesjsModule` from the `ngx-grapesjs` library:

 ```ts
  import { NgxGrapesjsModule } from '@developer-plexscape/ngx-grapesjs';
 ```

2. Add `NgxGrapesjsModule` into the `imports` array of your Angular module:

```ts
  @NgModule({
    declarations: [AppComponent],
    imports: [
      BrowserModule,
      NgxGrapesjsModule
    ],
    bootstrap: [AppComponent]
  })
```

3. Create an Angular component and add the following HTML snippet in its template:

```html
  <lib-ngx-grapesjs [template]="template" [placeholders]="placeholders"></lib-ngx-grapesjs>
```

The `lib-ngx-grapesjs` component supports passing the following input properties:

 - `template`: the HTML content of the editor in string format
 - `placeholders`: a list of variables with a predefined [format](https://github.com/Developer-Plexscape/ngx-grapesjs/blob/master/projects/ngx-grapesjs/src/lib/placeholder.model.ts) that represent custom data in the template

To get the HTML content from the editor in ***raw*** format, you can use the `getRawHtml` method of the `lib-ngx-grapesjs` component.

The GrapesJS editor saves all content in the local storage of the browser using a specific prefix. If you want to use a custom prefix, you can pass it as an input property in the component such as:

```html
  <lib-ngx-grapesjs [storagePrefix]="myPrefix"></lib-ngx-grapesjs>
```

where `myPrefix` is a property of string value.

>It is recommended to use a custom prefix when running multiple instances of the editor such as when opening or editing content in different tabs.

## Author

👤 **Plexscape**

* Website: https://www.plexearth.com
* Twitter: [@plexearth](https://twitter.com/plexearth)
* Github: [@Developer-Plexscape](https://github.com/Developer-Plexscape)
* LinkedIn: [@plexearth](https://linkedin.com/company/plexearth)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Developer-Plexscape/ngx-grapesjs/issues).

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
