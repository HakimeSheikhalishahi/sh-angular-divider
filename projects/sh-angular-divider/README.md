<h2 align="center">Angular divider</h2>

<p align="center">
 Custom divider with text
 </p>
 
 ![divider](https://user-images.githubusercontent.com/51107856/161973739-a482189e-9407-4a9b-8576-276242829098.png?raw=true "Angular divider")
# Angular divider
- `Line style and color`
- `Text style and color`
- `Text align`
- `Line without text`

# Demo

<a href="https://stackblitz.com/edit/angular-hknv4k?file=src%2Fapp%2Fapp.component.ts">
stackblitz
</a>

## Table of contents

- [Install](#install)
- [Quick start](#quick-start)
- [Input](#input)
- [Creator](#creator)
- [License](#license)

# Install

```bash
npm i sh-angular-divider
```

# Quick start

```typescript
import { ShAngularDividerModule } from "sh-angular-divider";

@NgModule({
  imports: [ShAngularDividerModule],
})
export class AppModule {}
```

## In component

```typescript
dividerConfig: IDividerConfig = {
  height: 2,
  lineStyle: "dashed",
  lineColor: "green",
  textColor: "green",
};
```

```html
<sh-angular-divider
  [config]="dividerConfig"
  [text]="'my text'"
></sh-angular-divider>
```

# Input

| Name              | Type             | Default | Required? | Description                        |
| ----------------- | ---------------- | ------- | --------- | ---------------------------------- |
| [config](#Config) | `IDividerConfig` | `{}`    | no        | Divider config                     |
| text              | `number`         | `1px`   | no        | Text that you want to show in line |

## Config

| Name      | Type     | Default  | Required? | Description                                                                                               |
| --------- | -------- | -------- | --------- | --------------------------------------------------------------------------------------------------------- |
| height    | `number` | `1px`    | no        | Line height                                                                                               |
| textAlign | `string` | `center` | no        | Allowed values: `left` , `right` , `center`.                                                              |
| lineStyle | `string` | `solid`  | no        | Allowed values: `dashed`, `dotted` , `solid` , `rounded`                                                  |
| lineColor | `string` | `gray`   | no        | Line color.                                                                                               |
| textColor | `string` | `gray`   | no        | Text color.                                                                                               |
| textClass | `string` | `-`      | no        | Set style for text, you can add one or more class name split by space. for example:'class1 class1 class1' |

# Creator

**Hakime sheikhalishahi**

- http://www.linkedin.com/in/hakime-sheikhalishahi
- h.sheykhalishahi@gmail.com

# License

MIT
