---
layout: post
title: Gerando certificados digitais com Openssl
---

Nesse post irei mostrar como podemos criar um certificado digital raiz (Certificate Authority) para que seja possível emitir certificados digitais próprios. Isso muitas vezes nos é útil para desenvolvermos aplicações seguras em um escopo restrito sem os gastos e os trâmites burocráticos com empresas de certificação digital como por exemplo VPN's, autenticação para serviços dentro de uma rede local, criação de assinaturas digitais para arquivos, dentro um ambiente interno de uma empresa ou repartição pública.

```
mkdir certificados & cd certificados
```