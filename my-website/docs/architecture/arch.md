---
id: arch
title: Архитектура
sidebar_position: 1
description: Контекстная и контейнерная диаграммы системы
---

# Архитектура

## C1 - Контекстная диаграмма

Диаграмма показывает систему TourClub в окружении внешних участников.

```plantuml
@startuml
actor "Участник" as user
actor "Организатор" as org
actor "Завхоз" as zavkhoz
actor "Руководитель клуба" as lead

rectangle "ИС Туристического клуба" as system

user --> system : подаёт заявку,\nсмотрит статус оплаты
org --> system : управляет походами,\nподтверждает заявки
zavkhoz --> system : получает списки участников
lead --> system : смотрит статистику
system --> user : email-уведомления
system --> org : email-уведомления
@enduml
```

## C2 - Контейнерная диаграмма

Диаграмма раскрывает внутренние компоненты системы и их взаимодействие.

```plantuml
@startuml
actor "Пользователь" as user

rectangle "ИС Туристического клуба" {
  component "Frontend\n(HTML/CSS/JS)" as fe
  component "Backend API\n(Python/Django)" as be
  database "PostgreSQL" as db
  component "Email-сервис" as email
}

cloud "OpenWeatherMap API" as weather

user --> fe : HTTPS
fe --> be : REST API
be --> db : SQL
be --> email : SMTP
be --> weather : REST
@enduml
```

## Внешние зависимости

| Сервис | Тип интеграции | Описание |
|--------|---------------|---------|
| OpenWeatherMap | REST (исходящий) | Погодные данные для рекомендаций снаряжения |
| SMTP-провайдер | SMTP (исходящий) | Email-уведомления участникам и организаторам |