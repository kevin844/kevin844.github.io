$nombre = "Juan"
$edad = 30

Write-Host "Hola, mi nombre es $nombre y tengo $edad años."

$numero1 = 10
$numero2 = 5
$suma = $numero1 + $numero2

Write-Host "El resultado de la suma de $numero1 y $numero2 es $suma."

$valor1 = 10
$valor2 = 20

if ($valor1 -gt $valor2) {
    Write-Host "$valor1 es mayor que $valor2."
} elseif ($valor1 -lt $valor2) {
    Write-Host "$valor1 es menor que $valor2."
} else {
    Write-Host "$valor1 es igual a $valor2."
}

$colores = "rojo", "azul", "verde"

foreach ($color in $colores) {
    Write-Host "El color es $color."
}

function Saludar($nombre) {
    Write-Host "Hola, $nombre. ¿Cómo estás?"
}

Saludar "María"
