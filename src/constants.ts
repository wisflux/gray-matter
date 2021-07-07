import { Dimension } from "./components/Preview";

export const MinDimensions: Dimension = {
    height: 300,
    width: 300
}
export const MaxDimensions: Dimension = {
    height: 4660,
    width: 2000
}
export const clamp = (value: number, min:number, max: number) => Math.max(min, Math.min(value, max));