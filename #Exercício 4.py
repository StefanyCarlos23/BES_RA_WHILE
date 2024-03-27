#Exercício 4

soma = 0
cont = 0

while cont < 5:
    numero = int(input("Digite um número maior que 10: "))
    if numero < 10:
        print("Número inválido")
    elif numero == 10:
        print("Número inválido")
    else:
        soma += numero
        cont += 1

print(f"A soma é {soma}")