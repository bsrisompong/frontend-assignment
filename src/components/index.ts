// @index('./*.{ts,tsx}', f => `export { default as ${f.path.replace(/\/index$/, '').replace(/\.\/(.*)/, '$1')} } from '${f.path.replace(/\/index$/, '')}';`)
export { default as Column } from "./Column";
export { default as Item } from "./Item";
// @endindex?
