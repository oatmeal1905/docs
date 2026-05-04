---
id: model
title: Модель данных
sidebar_position: 1
description: ERD - основные сущности системы и связи между ними
---

# Модель данных

## ERD-диаграмма

```plantuml
@startuml
entity USER {
  id : SERIAL <<PK>>
  --
  full_name : VARCHAR(255)
  email : VARCHAR(255) <<UNIQUE>>
  password_hash : VARCHAR(255)
  role : ENUM(participant, organizer)
  experience_level : SMALLINT
  is_active : BOOLEAN
  created_at : TIMESTAMPTZ
  deleted_at : TIMESTAMPTZ
}

entity REGION {
  id : SERIAL <<PK>>
  --
  name : VARCHAR(255) <<UNIQUE>>
}

entity TRIP {
  id : SERIAL <<PK>>
  --
  title : VARCHAR(255)
  description : TEXT
  region_id : INTEGER <<FK>>
  start_date : DATE
  end_date : DATE
  difficulty : SMALLINT
  capacity : SMALLINT
  free_places : SMALLINT
  status : ENUM(open, closed, cancelled)
  organizer_id : INTEGER <<FK>>
  created_at : TIMESTAMPTZ
}

entity APPLICATION {
  id : SERIAL <<PK>>
  --
  trip_id : INTEGER <<FK>>
  participant_id : INTEGER <<FK>>
  status_id : SMALLINT <<FK>>
  comment : TEXT
  created_at : TIMESTAMPTZ
  updated_at : TIMESTAMPTZ
}

entity APPLICATION_STATUS {
  id : SMALLINT <<PK>>
  --
  code : VARCHAR(50) <<UNIQUE>>
  name : VARCHAR(100)
}

entity PAYMENT {
  id : SERIAL <<PK>>
  --
  application_id : INTEGER <<FK>> <<UNIQUE>>
  payment_status : ENUM(unpaid, paid)
  updated_at : TIMESTAMPTZ
}

USER ||--o{ TRIP : "организует"
USER ||--o{ APPLICATION : "подаёт"
TRIP ||--o{ APPLICATION : "содержит"
APPLICATION }o--|| APPLICATION_STATUS : "имеет статус"
APPLICATION ||--o| PAYMENT : "имеет оплату"
REGION ||--o{ TRIP : "относится к"
@enduml
```

## Описание сущностей

### USER
Пользователи системы - участники и организаторы походов.

| Поле | Тип | Описание |
|------|-----|---------|
| id | SERIAL | Первичный ключ |
| full_name | VARCHAR(255) | Полное имя |
| email | VARCHAR(255) | Email, уникальный |
| role | ENUM | participant или organizer |
| experience_level | SMALLINT | Уровень опыта 0-5 |
| deleted_at | TIMESTAMPTZ | Мягкое удаление |

### TRIP
Походы, доступные для записи.

| Поле | Тип | Описание |
|------|-----|---------|
| id | SERIAL | Первичный ключ |
| title | VARCHAR(255) | Название похода |
| difficulty | SMALLINT | Сложность 1-5 |
| capacity | SMALLINT | Максимум участников |
| status | ENUM | open, closed, cancelled |

### APPLICATION
Заявки участников на походы.

| Поле | Тип | Описание |
|------|-----|---------|
| id | SERIAL | Первичный ключ |
| trip_id | INTEGER | Ссылка на поход |
| participant_id | INTEGER | Ссылка на участника |
| status_id | SMALLINT | Текущий статус заявки |

### PAYMENT
Факт оплаты взноса по заявке.

| Поле | Тип | Описание |
|------|-----|---------|
| id | SERIAL | Первичный ключ |
| application_id | INTEGER | Ссылка на заявку |
| payment_status | ENUM | unpaid или paid |

:::note
Оплата вынесена в отдельную сущность - в версии 2.0 появится интеграция с платёжным провайдером.
:::