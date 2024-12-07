Ngx-grapesjs is an Angular library that wraps basic functionality of the [GrapesJS editor](https://grapesjs.com/). It currently supports two modes for editing content: **webpage** and **newsletter**. The **newsletter** mode is preferable when you want to work with email content such as templates.

## Install

1. Install the core **GrapesJS** library

  ```sh
    npm install grapesjs
  ```

2. Install one of the following GrapesJS plugins according to the editor mode that you want to use.

  For webpage mode:

  ```sh
    npm install grapesjs-preset-webpage grapesjs-blocks-basic
  ```

  For newsletter mode:

  ```sh
    npm install grapesjs-preset-newsletter
  ```

3. Install `ngx-grapesjs`

  ```sh
    ng add ngx-grapesjs
  ```

The previous command will ask you which editor mode you want to use and it will make all the necessary modifications in the Angular workspace so that you can get started.

## Usage

 1. Import `NgxWebpageEditorComponent` or `NgxNewsletterEditorComponent` from the `ngx-grapesjs` library, according to the editor mode that you want to use and add it to the `imports` array of your Angular component or module.

2. Create an Angular component and add one of the following HTML snippets according to the editor mode that you want to use:

    For webpage mode:

    ```html
      <ngx-grapes-webpage-editor></ngx-grapes-webpage-editor>
    ```

    For newsletter mode:

    ```html
      <ngx-grapes-newsletter-editor></ngx-grapes-newsletter-editor>
    ```

Both editors support passing the following input properties:

 - `template`: the HTML content of the editor in string format
 - `storagePrefix`: the prefix that GrapesJS will use for persisting data to the local storage. By default it uses the `gjs-` prefix.

>It is recommended to use a custom prefix when running multiple instances of the editor such as when opening or editing content in different tabs.

Additionally, the newsletter editor component supports the following options:

- `placeholders`: an input property which is a list of variables with a predefined [format](https://github.com/Developer-Plexscape/ngx-grapesjs/blob/master/projects/ngx-grapesjs/src/lib/placeholder.model.ts) that represent custom data in the template
