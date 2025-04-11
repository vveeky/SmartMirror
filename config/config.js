let config = {
    // Адрес, на котором будет прослушиваться сервер (0.0.0.0 – прослушивает все интерфейсы)
    address: "0.0.0.0",

    // Порт для доступа к MagicMirror
    port: 8080,

    // Базовый путь URL
    basePath: "/",

    // Список разрешённых IP-адресов; пустой список или отключение проверки для разрешения всех
    ipWhitelist: [],
    useIpWhitelist: false,

    // Поддержка HTTPS (по умолчанию отключена)
    useHttps: false,
    httpsPrivateKey: "",
    httpsCertificate: "",

    // Язык и локаль
    language: "en",
    locale: "en-US",

    // Уровень логирования
    logLevel: ["INFO", "LOG", "WARN", "ERROR"],

    // Формат времени и система единиц измерения
    timeFormat: 24,
    units: "metric",

    // Модули, загружаемые в MagicMirror. Здесь можно добавить свои собственные или изменить порядок.
    modules: [
        {
            module: "alert"
        },
        {
            module: "clock",
            position: "top_left"
        },
        {
            module: "weather",
            position: "top_right",
            config: {
                weatherProvider: "openmeteo",
                type: "current",
                lat: 40.776676,  // Укажите нужные координаты
                lon: -73.971321
            }
        },
        {
            module: "compliments",
            position: "lower_third"
        }
        // Можно добавить дополнительные модули, например, для напоминаний
    ]
};

// Экспорт конфигурации для использования в приложении
if (typeof module !== "undefined") {
    module.exports = config;
}
