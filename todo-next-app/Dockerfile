#CONSTRUÇÃO

# Imagem base
FROM node:18-alpine as builder

# Diretório de trabalho
WORKDIR /app

# Copiar arquivos
COPY package.json package-lock.json ./

RUN npm install --force

COPY . .

RUN npm run build

RUN npm prune --force --omit=dev

#EXECUÇÃO
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public

RUN npm install --force --only=production

EXPOSE 3030

CMD ["npm", "run", "start", "--", "-p", "3030"]