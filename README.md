# Pronto Atende

Landing page responsiva para acolhimento e contato 24 horas.

## Docker

Informe o link real do WhatsApp e suba a aplicação:

```bash
NEXT_PUBLIC_WHATSAPP_URL='https://wa.me/5511915107450?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.' docker compose up --build -d
```

A landing ficará disponível em `http://localhost:3000`.

Para encerrar:

```bash
docker compose down
```

## Desenvolvimento local

Requer Node.js 22 ou superior.

```bash
npm install
npm run dev
```

Validação completa:

```bash
npm test
```
