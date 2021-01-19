---
layout: post
title: Criando uma assinatura digital a partir do certificado raiz
---

Nesse post irei ensinar como criar um arquivo de assinatura digital a partir do seu certificado raiz, desta forma você pode utilizar essa assinatura dentro de um ambiente fechado, uma empresa ou repartição pública, para conferir a autencidade dos arquivos criados.

## Criando certificado do usuário

Seguindo o mesmo processo da criação do certifiado raiz, devemos criar uma chave privada:

```
openssl genrsa -out joao_silva.key 4096
```

```
Generating RSA private key, 4096 bit long modulus (2 primes)
.....++++
..............................................................................................................................................................................................................................................................................................................................................................................................................................................................................++++
e is 65537 (0x010001)
```

Agora vamos criar o certificado:

```
openssl req -new -key joao_silva.key -out joao_silva.csr
```

Você deverá preencher algumas informações em relação ao certificado, nesse caso iremos informar os dados do usuário

```
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:BR
State or Province Name (full name) [Some-State]:Bahia
Locality Name (eg, city) []:Itabuna
Organization Name (eg, company) [Internet Widgits Pty Ltd]:João Silva
Organizational Unit Name (eg, section) []:
Common Name (e.g. server FQDN or YOUR name) []:João Silva
Email Address []:joao.silva@gmail.com     

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:123456
An optional company name []:
```
Crie o arquivo usuario.ext com o seguinte comando:

```
nano usuario.ext
```

Dentro deste arquivo cole as seguintes informações: 
```
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment,keyAgreement
extendedKeyUsage = codeSigning, emailProtection, clientAuth
subjectAltName = @alt_names
[alt_names]
DNS.1 = dominio-empresa.com
```

Agora iremos assinar o certificado do usuário utilizando o nosso certificado raiz:
```
openssl x509 -req -in joao_silva.csr -CA certificado_raiz.pem -CAkey certificado_raiz.key -CAcreateserial \
-out joao_silva.crt -days 825 -sha256 -extfile usuario.ext
```

Você deverá informar a senha do certificado_raiz:

```
Signature ok
subject=C = BR, ST = Bahia, L = Itabuna, O = Jo\C3\83\C2\A3o Silva, CN = Jo\C3\83\C2\A3o Silva, emailAddress = joao.silva@gmail.com
Getting CA Private Key
Enter pass phrase for certificado_raiz.key:
```

Agora iremos converter o certificado do usuário para o formado .pfx, que é um formato mais fácil de ser importado em sistema Windows e programas que aceitem assinatura digital tais como Word, Adobe Read, etc. Digite o seguinte comando:

```
openssl pkcs12 -export -out joao_silva.pfx -inkey joao_silva.key -in joao_silva.crt
```

Você deverá informar uma senha que será requerida para a leitura do certificado:
```
Enter Export Password:
Verifying - Enter Export Password:
```

Com o comando `ls` você poderá ver 3 arquivos referentes ao usuário: `joao_silva.csr  joao_silva.pfx  joao_silva.key`, você deverá disponibilizar ao usuário somente o arquivo .pfx afim de que ele possa assinar digitalmente todos os documentos.

Vale ressaltar que você deve instalar o certificado raiz em todos as máquinas e marcá-lo como confiável para que não hajam alertas ao usuário informando que o certificado dele é inválido.

No próximo post irei ensinar a criar um certificado HTTPS e instalar no Nginx.

Até a próxima!