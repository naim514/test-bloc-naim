
/**
* Utilisez ce fichier pour définir des fonctions et des blocs personnalisés.
/**
 * animations blocks
 */
//% weight=80 color=#0fbc11 icon=""
namespace animations {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block="blink x $x $y every $interval  ms"
    export function blink(x: number, y: number, interval: number): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
