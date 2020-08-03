# ScrollWiz
Allows you to add .is-active class into elements when they are in the viewport.


## Installation

ScrollWiz lives in [npm](https://www.npmjs.com/get-npm). To install the latest stable version, run the following command:

```shell
npm install scrollwiz
```

## Usage

Javascript

```js
import ScrollWiz from "scrollwiz";

ScrollWiz();
```

HTML

```html
<div class="box box--blue" data-scrollwiz="start">box 1</div>
<div class="box box--red" data-scrollwiz="half">box 2</div>
<div class="box box--yellow" data-scrollwiz="full">box 3</div>
```

SCSS

```scss
.box {
	height: 700px;
	transition: opacity 1s linear;
	opacity: 0;
    &--blue{
        background-color: blue;
    }
    &--red{
        background-color: red;
    }
    &--yellow{
        background-color: yellow;
    }
    &.is-active {
		opacity: 1;
	}
} 
```

`data-scrollwiz="start"` adds .is-active when the element just gets into the viewport

`data-scrollwiz="half"` adds .is-active when the half of the element gets into the viewport

`data-scrollwiz="full"` adds .is-active when all of the element gets into the viewport

### License

ScrollWiz is [MIT licensed](./LICENSE).