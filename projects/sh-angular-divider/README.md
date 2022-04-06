<h2 align="center">Angular divider</h2>

<p align="center">
 Custom divider with text
 </p>
 
 ![todo](https://user-images.githubusercontent.com/51107856/161961369-08664e2e-238f-431f-b5cb-1fe8acce0fa1.png?raw=true "Dynamic Form Builder")
# Angular divider
- `Line style and color`
- `Text style and color`
- `Text align`
- `Line without text`
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

# Config

| Name      | Type     | Default  | Required? | Description                                              |
| --------- | -------- | -------- | --------- | -------------------------------------------------------- |
| height    | `number` | `1px`    | no        | Line height                                              |
| textAlign | `string` | `center` | no        | Allowed values: `left` , `right` , `center`.             |
| lineStyle | `string` | `solid`  | no        | Allowed values: `dashed`, `dotted` , `solid` , `rounded` |
| lineColor | `string` | `gray`   | no        | Line color.                                              |
| textColor | `string` | `gray`   | no        | Text color.                                              |
| textClass | `string` | `-`      | no        |                                                          |

# Creator

**Hakime sheikhalishahi**

- http://www.linkedin.com/in/hakime-sheikhalishahi
- h.sheykhalishahi@gmail.com

# License

MIT
