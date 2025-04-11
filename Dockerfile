FROM --platform=$BUILDPLATFORM node:18-bullseye

# Установка системных зависимостей
RUN apt-get update && apt-get install -y \
    libnss3 \
    libasound2 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libdrm2 \
    libgbm1 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxfixes3 \
    libxrandr2 \
    libgtk-3-0 \
    --no-install-recommends \
    --fix-missing \
    && rm -rf /var/lib/apt/lists/*

# Инициализация подмодулей Git
RUN apt-get update && apt-get install -y git

# Рабочая директория и зависимости
WORKDIR /app
COPY package*.json ./
RUN npm install

# Копирование всех файлов
COPY . .

# Проверка существования electron.js
RUN ls -la MagicMirror/js/electron.js

# Запуск от обычного пользователя
RUN chown -R node:node /app
USER node

EXPOSE 8080
CMD ["npm", "start"]