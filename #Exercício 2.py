#Exercício 2

contador = 0
soma = 0
media = 0
numeroNotas = 10

while contador < numeroNotas:
    nota = float(input(f"Digite sua nota: "))
    if nota > 10 or nota < 0:
        print("Nota inválida, informe novamente")
    else:
        soma += nota #soma = soma + nota (Acumular notas)
        contador += 1

media = soma/numeroNotas

print(f"A sua média final é: {media:.2f}")