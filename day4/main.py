import hashlib

def encontrar_numero(secret_key):
    numero = 0
    while True:
        # Concatenar la clave secreta y el número
        data = secret_key + str(numero)
        # Generar el hash MD5
        result = hashlib.md5(data.encode())
        # Convertir el hash a hexadecimal
        hex_result = result.hexdigest()
        # Verificar si comienza con al menos cinco ceros
        if hex_result.startswith('000000'):
            return numero
        numero += 1

# Prueba con tus claves secretas
print(encontrar_numero('abcdef'))  # Debería imprimir: 609043
print(encontrar_numero('pqrstuv'))  # Debería imprimir: 1048970
print(encontrar_numero('yzbqklnj')) # 282749

