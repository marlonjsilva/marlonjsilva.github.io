---
layout: post
title: Gerando certificados digitais com Openssl
---

Nesse post irei mostrar como podemos criar um certificado digital raiz (Certificate Authority) para que seja possível emitir certificados digitais próprios. Isso muitas vezes nos é útil para desenvolvermos aplicações seguras em um escopo restrito sem os gastos e os trâmites burocráticos com empresas de certificação digital. Como exemplo criar serivços de VPN's, autenticação para serviços dentro de uma rede local, criação de assinaturas digitais para arquivos, tudo dentro um ambiente interno de uma empresa ou repartição pública.

Foi utilizada a versão 1.1.1g de 21 de abril de 2020, para verficar sua versão utilize o seguinte comando:

```
openssl version
```

## Criando o certificado raiz

Primeiro é necessário criar uma pasta onde estará guardado todos os arquivos gerados:

```
mkdir certificados; cd certificados
```

Dentro desta pasta iremos gerar a chave privada para o nosso certificado:

```
openssl genrsa -des3 -out certificado_raiz.key 4096
```

```
Generating RSA private key, 4096 bit long modulus (2 primes)
...........................................................................................++++
.......................++++
e is 65537 (0x010001)
Enter pass phrase for certificado_raiz.key:
Verifying - Enter pass phrase for certificado_raiz.key:
```

Para gerar o certificado raiz com a nossa chave criada vamos utilizar o seguinte comando:
```
openssl req -x509 -new -nodes -key certificado_raiz.key -sha256 -days 1825 -out certificado_raiz.pem
```
Preste atenção ao parâmetro *-days* que diz respeito a validade do nosso certificado, que nesse caso é de 5 anos.

Temos que preencher algumas informações básicas para criação do certificado raiz:

```
Enter pass phrase for certificado_raiz.key:
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
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Marlon Silva CA
Organizational Unit Name (eg, section) []:
Common Name (e.g. server FQDN or YOUR name) []:Marlon Silva CA
Email Address []:marlon230496@gmail.com
```

Agora iremos criar nosso certificado no formato .crt, dessa forma podemos importá-lo
```
openssl x509 -outform der -in certificado_raiz.pem -out certificado_raiz.crt
```

Com o comando `ls` você deve conseguir ver os seguintes arquivos:
```
certificado_raiz.crt  certificado_raiz.key  certificado_raiz.pem
```

Pronto! Agora você já é uma "entidade certificadora".

No próximo post irei mostrar como criar um arquivo .pfx para assinatura digital de documentos.

Até a próxima!
