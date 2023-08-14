# Unit
Create Responsive dimensions based on aspect ratios [for MUI].  
Works with mui `emotion` system


### Usage
`unit` provides 3 functions (`unit`, `unit.text`, `unit.dim`, `unit.scale`)  
by default `unit` assumes `xxl` breakpoint.

#### unit (for paddings/margins etc (size -> size / 8))
```typescript
unit(16)
// => 
// {
//     "xs": 1.08,
//     "lg": 1.44,
//     "xl": 1.7,
//     "xxl": 2
// }
```

#### unit.text (for fontSizes)
```typescript
unit.text(16)
// => 
// {
//     "xs": 11.2,
//     "lg": 13.6,
//     "xl": 14.4,
//     "xxl": 16
// }
```

#### unit.dim (for width/height (dimensions))
```typescript
unit.dim(16)
// => 
// {
//     "xs": 8.64,
//     "lg": 11.52,
//     "xl": 13.6,
//     "xxl": 16
// }
```

### unit.scale (for adjusting sizes via transfor->scale)
```typescript
unit.scale()
// =>
// {
//     "transform": {
//         "xs": "scale(0.7)",
//         "lg": "scale(0.8)",
//         "xl": "scale(0.9)",
//         "xxl": "scale(1)"
//     }
// }
```

### Defaults
default ratios for `unit` and `unit.dim`
```typescript
let xsRatio = 0.54;
let lgRatio = 0.72;
let xlRatio = 0.85;
```

default ratios for `unit.text`
```typescript
let xsRatio = 0.7;
let lgRatio = 0.85;
let xlRatio = 0.9;
```
