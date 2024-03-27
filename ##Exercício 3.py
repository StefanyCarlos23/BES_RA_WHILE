#Exercício 3

numPares = 0
somaPar = 0
numImpares = 0
somaImpar = 0

while numPares < 5 and somaImpar <= 30:
    numero = int(input("Digite um número inteiro: "))  
    if numero % 2 == 0:
        print(f"O número {numero} é par")
        somaPar += numero
        numPares += 1
    elif numero < 0:
        print("Número inválido, digite outro número")
    else:
        print(f"O número {numero} é ímpar")
        somaImpar += numero
        numImpares += 1

print(f"A quantidade de números pares é: {numPares}")
print(f"A soma dos números pares é: {somaPar}")
print(f"A quantidade de números ímpares é: {numImpares}")
print(f"A soma dos números ímpares é: {somaImpar}")