/**
 * Tips That Make You a Better Typescript Programmer
 */

// ? 1. Use discriminated union instead of optional fields

/*
When defining a set of polymorphic types like Shape, it’s easy to start with this type:
type Shape = {
    kind: 'circle' | 'rect';
    radius?: number;
    width?: number;
    height?: number;
}

The non-null assertions "?" (when accessing radius, width, and height fields) are needed because there’s no established relationship between kind and other fields. Instead, discriminated union is a much better solution. So, you can use different types with all the specific fields you need, one by one and Type narrowing has eliminated the need for coercion..

*/

type Circle = { kind: "circle"; radius: number };
type Rect = { kind: "rect"; width: number; height: number };
type Shape = Circle | Rect;

const getAreaFinal: (shape: Shape) => number = (shape: Shape): number => {
  return shape.kind === "circle"
    ? Math.PI * shape.radius ** 2
    : shape.width * shape.height;
};

const circle: Circle = {
  kind: "circle",
  radius: 10,
};

const rect: Rect = {
  kind: "rect",
  height: 5,
  width: 10,
};

console.debug(getAreaFinal(circle));
console.debug(getAreaFinal(rect));

// ? 2. Use type predicate to avoid type assertion "as"

/*
If you use typescript in the right way, you should rarely find yourself using explicit type assertion (like value as SomeType).
------------------------------------------------------------------------
function isCircle(shape: Shape) {
    return shape.kind === 'circle';
}

function isRect(shape: Shape) {
    return shape.kind === 'rect';
}

const myShapes: Shape[] = getShapes();

- error because typescript doesn't know the filtering narrows typing
const circles: Circle[] = myShapes.filter(isCircle);

- you may be inclined to add an assertion:
const circles = myShapes.filter(isCircle) as Circle[];
------------------------------------------------------------------------

But avoid doing it, for that reason, a more elegant solution is to change isCircle and isRect to return type predicate instead, so they help Typescript further narrow down types after the filter call
*/

function isCircle(shape: Shape): shape is Circle {
    return shape.kind === 'circle';
}

function isRect(shape: Shape): shape is Rect {
    return shape.kind === "rect";
}

function getShapes(): Shape[] {
    return [circle, rect];
}

const myShape: Shape[] = getShapes();
console.debug(myShape);

const circles: Circle[] = myShape.filter(isCircle);
console.debug(circles);

const rects: Rect[] = myShape.filter(isRect);
console.debug(rects);