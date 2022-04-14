
/**
* Utilisez ce fichier pour définir des fonctions et des blocs personnalisés.
/**
 * animations blocks
 */
//% weight=80 color=#0fbc11 icon=""
namespace animations {
    
    //% block="blink x $x y $y every $interval  ms"
    export function blink(x: number, y: number, interval: number): void {
        // Add code here
        let sprite=game.createSprite(x,y)
        sprite.setBlink(interval)
        sprite.blink()
        
    }

    
}
